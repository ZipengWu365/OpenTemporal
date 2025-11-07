---
title: Visualization and Diagnostics
description: Practices for making time-series evaluations trustworthy.
---

## Diagnostic layers

- **Temporal coverage:** highlight gaps, downtime, and sampling jitter before modeling.
- **Distribution tracking:** rolling histograms and quantile summary plots expose drift.
- **Residual analysis:** partial autocorrelation, Ljung-Box tests, or spectral density on residuals.

## Visualization tools

- Vega-Lite / Altair for declarative, shareable charts.
- Plotly, Bokeh, or Observable for interactive dashboards.
- Grafana or Superset for operational monitoring with alerts.

## Reporting checklist

1. Pair every model metric with contextual metadata (data range, sensor groups, version).
2. Distinguish backtest results from live monitoring to avoid mixing timeframes.
3. Provide annotations for interventions, experiments, or outages.

Surface diagnostics alongside the [Applications](/docs/applications/overview.md) notes so stakeholders can interrogate system behaviour quickly.
