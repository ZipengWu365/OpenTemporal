---
title: "Core Tasks: Forecasting, Anomaly, Retrieval, Control"
description: Shared task templates for time-series reasoning.
---

This page outlines recurring task families to maintain conceptual alignment across disciplines.

## Forecasting

Forecasting translates historical structure into forward-looking distributions. Clarify:

- **Operational horizon:** point vs probabilistic, minutes vs months.
- **Evaluation tolerance:** pinball loss, CRPS, or bespoke metrics tied to downstream constraints.
- **Regime stability:** plan for recency bias, covariate drift, and interventions.

## Anomaly detection

- Define the contrast baseline: individual, cohort, or physics-based reference.
- Balance detection sensitivity with false-positive fatigue for operators.
- Track root-cause loops so anomalies reinforce model improvements rather than sit unresolved.

## Retrieval and similarity

- Choose representation (shape-based, feature-based, or learned embeddings) before selecting a distance function.
- Align retrieval objectives with interpretability needs: analysts may prefer symbolic motifs over latent vectors.
- Consider indexing structures that support streaming inserts (e.g., ball trees, ANN graphs).

## Control and decision support

- Combine forecasting with state estimation and policy learning when interventions are possible.
- Encode safety and fairness constraints explicitly; do not rely on black-box policies alone.
- Collaborate with domain experts to validate controllability assumptions.

Each task ties back to representations. Continue with the [Representation-First View](./representation-first.md) to clarify why structural priors are essential.
