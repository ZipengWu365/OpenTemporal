---
title: Classical Representations (PAA, PLA, APCA)
description: Piecewise approximations for indexing, retrieval, and summarisation.
---

Classical approximations reduce dimensionality while keeping key shapes intact.

## Typical use cases

- Fast similarity search across large archives before heavier modeling.
- Building interpretable dashboards that highlight macro-shapes instead of every timestamp.
- Enabling symbolic reasoning or rule engines that require discrete segments.

## Strengths

- Deterministic and easy to audit.
- Cheap to recompute when new data arrives.
- Compatible with distance measures such as Euclidean, DTW, or shape-based metrics.

## Limitations

- Sensitive to window size; poor fits can introduce artifacts.
- Lack probabilistic interpretation and uncertainty estimates.

## When to consider them

- Early project scans where annotation is scarce.
- Memory-constrained environments (edge devices, embedded controllers).
- Retrieval or indexing stages ahead of downstream classifiers.

Pair these summaries with symbolic techniques (see [Symbolic and Frequency Methods](./symbolic-frequency.md)) when you need discrete tokens for downstream pipelines.
