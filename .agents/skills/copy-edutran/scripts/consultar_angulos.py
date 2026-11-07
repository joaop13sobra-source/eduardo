#!/usr/bin/env python3
"""Consulta a biblioteca copiada; apenas leitura, sem dependências externas."""
import argparse
import csv
import json
import unicodedata
from pathlib import Path


def norm(text):
    return ''.join(c for c in unicodedata.normalize('NFKD', text) if not unicodedata.combining(c)).casefold()


def carregar(base):
    result = []
    for path in sorted(base.glob('biblioteca-angulos_*.csv')):
        if 'Indice' in unicodedata.normalize('NFKD', path.name).encode('ascii', 'ignore').decode():
            continue
        with path.open(encoding='utf-8-sig', newline='') as handle:
            rows = list(csv.reader(handle))
        header = next((i for i, row in enumerate(rows) if row and row[0].strip() == '#'), None)
        if header is None:
            continue
        keys = rows[header]
        for row in rows[header+1:]:
            if not row or not row[0].strip().isdigit():
                continue
            data = dict(zip(keys, row))
            result.append({'categoria': path.stem.split('_', 1)[1], **data})
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--categoria', default='', help='Problema, Solução, Produto, Oferta ou Genéricos; acentos opcionais.')
    parser.add_argument('--query', default='', help='Busca no ângulo, explicação, exemplo e prompt.')
    parser.add_argument('--limit', type=int, default=8)
    parser.add_argument('--json', action='store_true')
    args = parser.parse_args()
    if args.limit < 1:
        parser.error('--limit deve ser positivo')
    base = Path(__file__).resolve().parents[1] / 'references' / 'biblioteca'
    rows = carregar(base)
    if args.categoria and norm(args.categoria) not in {norm(r['categoria']) for r in rows}:
        parser.error('Categoria desconhecida')
    filtered = [r for r in rows if (not args.categoria or norm(r['categoria']) == norm(args.categoria))
                and all(q in norm(' '.join(str(v) for v in r.values())) for q in norm(args.query).split())]
    selected = filtered[:args.limit]
    if args.json:
        print(json.dumps({'total_encontrado': len(filtered), 'angulos': selected}, ensure_ascii=False, indent=2))
    else:
        for row in selected:
            print('\n' + row['categoria'] + ' · ' + row.get('Ângulo', row.get('Angulo', '')))
            print(row.get('Explicação', row.get('Explicacao', '')))
        print('\n' + str(len(filtered)) + ' ângulos encontrados; exibidos ' + str(len(selected)))


if __name__ == '__main__':
    main()
