---
title: Finance and Risk Signals
description: Market, credit, and operational risk time-series patterns.
---

### Data types

Tick-level trades and quotes, end-of-day aggregates, credit bureau refreshes, macroeconomic indicators, and operational risk metrics.

### Common challenges

- Regime shifts due to policy changes, liquidity shocks, or structural breaks.
- Heavy regulations on data lineage, auditability, and model risk management.
- Strong feedback loops between predictions and market behaviour.

### Method families

- Probabilistic forecasting with scenario generation and stress testing.
- Graph-based or attention-based models that encode cross-asset influence.
- Online learning methods that adapt quickly without full retraining.

### Pitfalls

- Overfitting to recent volatility regimes.
- Ignoring transaction costs and latency when translating signals to execution.
- Deploying opaque models without challenger baselines and governance documentation.

Review the [Reading Room](/docs/reading-room/overview.md) for curated survey papers on financial time-series modeling and regulation.
