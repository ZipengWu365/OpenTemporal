---
title: Representation-First View of Time Series
description: Why structure-aware representations precede model search.
---

Representation work sets the ceiling for downstream models. Whether using classical transforms or learned embeddings, the aim is to encode temporal context, uncertainty, and relationships among channels.

## Principles

- **Structure before parameters:** capture trend/seasonality, frequency content, and domain constraints before tuning model hyperparameters.
- **Multi-scale thinking:** sliding windows, hierarchical aggregation, and recurrence surfaces highlight different patterns.
- **Interpretability scaffolds:** symbolic approximations and shapelets provide anchors for human review.

## Representation families

- Statistical summaries (PAA, PLA, APCA) compress sequences for indexing and retrieval.
- Symbolic or frequency-domain views (SAX, SFA, wavelets) stabilise noisy signals.
- Learned representations (autoencoders, contrastive encoders, transformers) align with task-specific objectives when labeled data is available.

Link representations directly to tasks:

- Forecasting requires uncertainty-aware embeddings and calibrated regressors.
- Anomaly detection benefits from reconstruction-driven or density-based encodings.
- Control flows value causal latent variables and low-latency updates.

Dive deeper in the [Methods & Concepts](/docs/methods-concepts/overview.md) section for detailed method families and decision guides.
