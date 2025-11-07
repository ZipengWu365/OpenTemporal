---
title: Landscape of Time-Series Intelligence
description: Survey of signals, structures, and inference goals.
---

Time-series intelligence spans sensing technologies, mathematical structures, and decision contexts. Viewing the space as a landscape helps prioritise which abstractions truly matter.

## Signals and modalities

- **Wearable and physiological sensing:** dense, noisy measurements with individual variability.
- **Industrial telemetry:** controllable sampling, but heterogeneous sensors and downtime segments.
- **Finance and risk:** high-frequency streams plus regime shifts that invalidate recent history.
- **IoT and cyber-physical networks:** distributed nodes with asynchronous clocks and bandwidth limits.

## Structural considerations

- Sampling may be irregular, batched, or event-driven; resampling introduces bias.
- Observed series often mix deterministic structure (trend, seasonality) with state-dependent stochasticity.
- Multivariate interactions can encode delayed feedback or shared latent drivers.

## Inference goals

Most projects blend several objectives: forecasting, anomaly detection, retrieval/similarity, control optimisation, summarisation, and attribution. Map each objective to the data regime before selecting models.

Continue with [Core Tasks](./core-tasks.md) for shared task templates or move directly into the [Methods & Concepts](/docs/methods-concepts/overview.md) catalog.
