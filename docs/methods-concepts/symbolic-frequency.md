---
title: Symbolic and Frequency-Based Methods (SAX, SFA, etc.)
description: Tokenising and spectral approaches for noisy or irregular signals.
---

Symbolic Aggregate approXimation (SAX), Symbolic Fourier Approximation (SFA), wavelets, and related transforms recast time series into vocabularies or spectral coefficients.

## Typical use cases

- Large-scale motif discovery where hashing enables fast search.
- Mining anomaly candidates when raw values are dominated by noise.
- Bridging disparate sampling rates by comparing in the frequency domain.

## Strengths

- Robust against small temporal shifts and amplitude noise.
- Facilitate discrete indexing structures and explainable rules.
- Work well with textual analytics tooling once series are tokenised.

## Limitations

- Quantisation choices strongly influence performance.
- Spectral methods assume stationarity within windows.

## When to consider them

- When analysts need interpretable motifs or symbolic rules.
- When storage/computation constraints prohibit raw-series retention.
- When comparing across devices with different sampling rates.

Combine symbolic encodings with decomposition methods (see [Trend and Seasonality](./decomposition-trend.md)) to isolate residual behaviour.
