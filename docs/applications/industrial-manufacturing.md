---
title: Industrial and Manufacturing Time Series
description: Process telemetry, quality monitoring, and predictive upkeep.
---

### Data types

Supervisory control and data acquisition (SCADA) tags, PLC logs, machine vision summaries, and maintenance records.

### Common challenges

- Mixed sampling rates and sensor hierarchies.
- Planned downtime, batch transitions, and maintenance events confound model training.
- Limited labels for failure states; expert annotations are expensive.

### Method families

- Multivariate state-space or transformer models that capture coupling between lines.
- Hybrid physics + data-driven models where constraints are well understood.
- Streaming anomaly detection with adaptive thresholds tied to production schedules.

### Pitfalls

- Training on data that excludes rare but critical failure modes.
- Ignoring sensor provenance, resulting in misaligned phases.
- Deploying models without integration into maintenance ticketing loops.

Coordinate with the [Tools & Starter Kits](/docs/tools-starter-kits/starter-pipelines.md) for starter templates that incorporate historian connectors and retraining hooks.
