---
title: Decomposition, Trend, and Seasonality Methods (SSA, STL, etc.)
description: Separating structural components before modeling residuals.
---

Singular Spectrum Analysis (SSA), Seasonal-Trend decomposition using Loess (STL), Prophet-style additives, and other filtering methods clarify what portion of a signal is structural versus idiosyncratic.

## Typical use cases

- Pre-processing prior to forecasting or anomaly detection.
- Communicating interpretable components to stakeholders.
- Validating if seasonality is stable enough for parametric models.

## Strengths

- Enhance signal-to-noise ratio for subsequent learners.
- Provide diagnostics for seasonality drift and change points.
- Can operate with minimal supervision.

## Limitations

- Sensitive to window lengths, smoothing parameters, and missing data handling.
- Over-decomposition can remove informative dynamics.

## When to consider them

- When you need quick insight into structural drivers before committing to complex models.
- When stakeholders expect visibility into trend vs residual contributions.
- When building hybrid pipelines that feed decomposed components into modern models.

After decomposition, evaluate modern architectures (see [Modern Deep Models](./modern-deep-models.md)) on the residual or component series.
