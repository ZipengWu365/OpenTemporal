---
title: Starter Pipelines for Common Tasks
description: Generic pipeline templates without proprietary details.
---

## Forecasting baseline

1. Data ingestion via scheduled batch jobs (Parquet/Arrow) with schema validation.
2. Decomposition step (STL) to separate trend/seasonality.
3. Baseline models: ETS/ARIMA plus gradient boosting on engineered covariates.
4. Evaluation: rolling-origin backtests with MAE, MAPE, and calibration plots.
5. Deployment: model registry + scheduled retrain triggered by drift metrics.

## Anomaly detection baseline

1. Sliding-window feature extraction (tsfresh or custom stats).
2. Density or autoencoder-based detectors with per-asset thresholds.
3. Alert routing that includes context (recent events, sensor metadata).
4. Feedback loop to capture analyst labels for retraining.

## Retrieval and similarity baseline

1. Representation stage (PAA/APCA or learned embeddings via contrastive loss).
2. Approximate nearest-neighbour index (FAISS, Annoy, ScaNN) hosted as a service.
3. Re-ranking with domain-specific rules before presenting to operators.

Use these blueprints as checklists; replace each block with tools that meet your governance and infrastructure requirements.
