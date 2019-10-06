---
layout: paper
title: Contextual Compression of Large-Scale Wind Turbine Array Simulations
authors: K. Gruchalla, N. Brunhart-Lupo, K. Potter, J. Clyne
journal: "Data Reduction for Big Scientific Data (DRBSD-2)" 
order: 2017-04
pubdate: November 2017
image: /images/context-illustration.png
image_text: 
links:
- path: "https://www.researchgate.net/publication/321144582_Contextual_Compression_of_Large-Scale_Wind_Turbine_Array_Simulations"
  title: preprint
- path: "bib/gruchalla_contextual_2017.bib"
  title: bibtex
- path: "https://www.researchgate.net/publication/336250711_Contextual_Compression_of_Large-Scale_Wind_Turbine_Array_Simulations"
  title: presentation
---
Data sizes are becoming a critical issue particularly for HPC applications. We have developed a user-driven lossy wavelet-based storage model to facilitate the analysis and visualization of large-scale wind turbine array simulations. The model stores data as heterogeneous blocks of wavelet coefficients, providing high-fidelity access to user-defined data regions believed the most salient, while providing lower-fidelity access to less salient regions on a block-by-block basis. In practice, by retaining the wavelet coefficients as a function of feature saliency, we have seen data reductions in excess of 94%, while retaining lossless information in the turbine-wake regions most critical to analysis and providing enough (low-fidelity) contextual information in the upper atmosphere to track incoming coherent turbulent structures. Our contextual wavelet compression approach has allowed us to deliver interactive visual anlaysis while providing the user control over where data loss, and thus reduction in accuracy, in the analysis occurs. We argue this reduced but contexualized representation is a valid approach and encourages contextual data management.
