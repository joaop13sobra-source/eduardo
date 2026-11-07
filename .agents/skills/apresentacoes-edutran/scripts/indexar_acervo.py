#!/usr/bin/env python3
"""Consulta local, sem alterar os materiais. Execute --help para filtros."""
import argparse
import json
import re
import unicodedata
from pathlib import Path


def normalizar(value):
    value = unicodedata.normalize('NFKD', value)
    return ''.join(c for c in value if not unicodedata.combining(c)).casefold()


def indexar(root):
    cursos = []
    for curso in sorted(root.iterdir()):
        if not curso.is_dir() or not re.match(r'^\d+\s*-', curso.name):
            continue
        sobre = curso / 'Sobre o curso.md'
        modulos = []
        for modulo in sorted(curso.iterdir()):
            if not modulo.is_dir() or not re.match(r'^\d+\s*-', modulo.name):
                continue
            for conteudo in sorted(modulo.glob('*Conteúdo.md')):
                texto = conteudo.read_text(encoding='utf-8')
                links = modulo / 'Documentos oficiais' / 'Links.md'
                documentos = sorted((modulo / 'Documentos oficiais').glob('*'))
                modulos.append({
                    'modulo': modulo.name,
                    'conteudo': str(conteudo.relative_to(root)),
                    'links': str(links.relative_to(root)) if links.exists() else None,
                    'titulos': re.findall(r'^#{1,3} (.+)$', texto, re.M),
                    'documentos_oficiais': [str(p.relative_to(root)) for p in documentos if p.is_file() and p.name != 'Links.md'],
                    '_texto_busca': normalizar(curso.name + '\n' + modulo.name + '\n' + texto),
                })
        cursos.append({'curso': curso.name, 'sobre': str(sobre.relative_to(root)) if sobre.exists() else None, 'modulos': modulos})
    return cursos


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=Path(__file__).resolve().parents[4])
    parser.add_argument('--query', default='', help='Termos do tema; todos devem aparecer no módulo (ignora acentos).')
    parser.add_argument('--course', default='', help='Parte do nome do curso ou seu número.')
    parser.add_argument('--json', action='store_true', help='Inclui caminhos de documentos e títulos em JSON.')
    args = parser.parse_args()
    root = args.root.expanduser().resolve()
    if not root.is_dir():
        parser.error('Raiz não encontrada: ' + str(root))
    termos = normalizar(args.query).split()
    cursos = indexar(root)
    resultado = []
    for curso in cursos:
        if args.course and normalizar(args.course) not in normalizar(curso['curso']):
            continue
        modulos = [m for m in curso['modulos'] if all(t in m['_texto_busca'] for t in termos)]
        if not modulos:
            continue
        for modulo in modulos:
            modulo.pop('_texto_busca', None)
        resultado.append({**curso, 'modulos': modulos})
    if args.json:
        print(json.dumps({'raiz': str(root), 'cursos': resultado}, ensure_ascii=False, indent=2))
    else:
        for curso in resultado:
            print('\n' + curso['curso'])
            print('  Contexto: ' + str(curso['sobre']))
            for modulo in curso['modulos']:
                print('  - ' + modulo['conteudo'])
                print('    Fontes: ' + str(modulo['links']))
        print('\n' + str(len(resultado)) + ' cursos · ' + str(sum(len(c['modulos']) for c in resultado)) + ' módulos encontrados')


if __name__ == '__main__':
    main()
