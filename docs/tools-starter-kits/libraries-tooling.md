---
title: Time-Series Libraries and Tooling Overview
description: Common open-source libraries for analysis, modeling, and infrastructure.
---

## Libraries to know

- **sktime** (Python): unified API for forecasting, classification, and pipelines.
- **statsmodels**: classical statistical modeling, diagnostics, and decomposition.
- **darts**: deep learning and probabilistic forecasting abstractions.
- **tsfresh**: automatic feature extraction for classical ML baselines.
- **Merlion / Kats**: batteries-included toolkits with evaluation utilities.

## Infrastructure helpers

- Workflow engines: Airflow, Prefect, Dagster for scheduled retraining.
- Feature stores: Feast or Tecton for managing derived signals.
- Experiment tracking: MLflow or Weights & Biases to log hyperparameters and metrics.

## Selection checklist

1. Confirm license compatibility for your deployment context.
2. Assess community activity and maintenance cadence.
3. Prototype with a small dataset to evaluate ergonomics.

See [Starter Pipelines](./starter-pipelines.md) for opinionated combinations of these tools.
