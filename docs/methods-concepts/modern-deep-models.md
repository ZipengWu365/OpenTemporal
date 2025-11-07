---
title: Modern Deep Models for Time Series
description: Transformers, sequence models, and hybrid architectures.
---

Deep learning for time series now spans CNN/RNN hybrids, attention-heavy architectures, diffusion-inspired probabilistic models, and graph-temporal networks.

## Typical use cases

- High-dimensional multivariate series where dependencies shift over time.
- Regimes requiring multitask learning (forecasting, classification, anomaly scoring) within one backbone.
- Scenarios where representation learning unlocks downstream retrieval or control loops.

## Strengths

- Flexible inductive biases through attention, convolution, or state-space kernels.
- Support transfer learning with pretraining on related domains.
- Integrate exogenous variables, metadata, and missingness patterns.

## Limitations

- Require careful regularisation and monitoring to avoid overfitting.
- Often need hardware acceleration for training and inference.
- Interpretability hinges on probes or attribution tooling.

## When to consider them

- When data volume is sufficient and you can operationalise model governance.
- When classical baselines saturate and you need joint modeling of structure plus nonlinear interactions.
- When embeddings from deep models feed indexing, retrieval, or control subsystems.

Pair deep backbones with transparent evaluation (see [Tools & Starter Kits](/docs/tools-starter-kits/overview.md)) to keep trust high.
