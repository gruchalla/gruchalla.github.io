---
layout: paper
title: In-Browser Particle Advection with a State-Space Surrogate
authors: J.D. Laurence-Chasen, R. Sandhu, S. Sane, K. Gruchalla
journal: "BTSD 2026, IEEE BigData 2026." 
order: 2026-03 
pubdate: December 2026
image: /images/HERO_Flow2.png
image_text: Interactive particle advection using a browser-based deep neural network.
links:

---
Particle advection in time-varying flow fields traditionally integrates through time, sampling the velocity field at every step, so interactive exploration must read and hold the stored simulation output slice by slice. For fields of gigabytes to terabytes, this I/O and memory cost ties interactive analysis to backend compute and rules out lightweight clients such as web browsers. Lagrangian trajectories extracted in situ are a far smaller representation of the flow, and we compress them
further into a learned surrogate: a state-space sequence model (Mamba) that predicts each particle’s displacement over a fixed step from its position, the current time, and a per-particle recurrent state. The model is a step-wise integrator rather than a seed-to-endpoint flow map, so users can seed particles at any time and place during playback. On a laminar Navier–Stokes simulation from the Gerris flow data set, a 2.1 GB velocity field reduces to 1.1 MB of training trajectories and then to 35 KB of weights (57,000× overall), with a median pathline error of 0.16 grid cells over 10 s. A surrogate of this size runs client-side via WebAssembly, advecting 10,000 particles at 26 FPS on a laptop with no back end. On the unsteady Gerris members, adding Gaussian noise to the training inputs improves accuracy and robustness. Overall, our results indicate that state-space
models present a promising approach for efficient and accurate particle advection in resource-constrained environments such as web browsers.
