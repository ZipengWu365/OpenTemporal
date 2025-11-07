---
title: Health and Aging Signals
description: Wearable, physiological, and longitudinal study considerations.
---

### Data types

Wearables, clinical monitors, lab assays, and digital phenotyping platforms produce high-frequency, multi-modal series. Longitudinal cohorts add survey or imaging context on slower cadences.

### Common challenges

- Irregular sampling and device dropout.
- Personalised baselines that shift with medication, routines, or adherence.
- Privacy, governance, and consent constraints that limit raw data sharing.

### Method families

- Representation learning with contrastive or self-supervised objectives to personalise embeddings.
- Change-point and anomaly detection calibrated per participant before aggregating insights.
- Physiological models combining mechanistic knowledge (heart rate variability, respiration) with statistical layers.

### Pitfalls

- Over-generalising across age groups or clinical subtypes.
- Ignoring sensor calibration drift.
- Deploying models without transparent uncertainty and alert review workflows.

Link back to [Learning Paths for Researchers](/docs/learning-paths/cross-disciplinary.md) if you are entering the field from biology or medicine.
