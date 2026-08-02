---
layout: paper
title: "Beyond the Post Hoc User Study: Modeling Visual Decision-Making with Active Inference"
authors: H. Goldwyn, G. Johnson, C. Ibarra, L. Padilla, K. Gruchalla
journal: "IEEE VIS"
order: 2026-02
pubdate: Nov 2026
image: /images/active_inference_padilla_diagram.png
image_text: "An illustration of the Dual-process decision making"
links:
- path: 
  title: in press
---
The evaluation of visual encodings currently relies heavily on costly empirical user studies. While this A/B testing identifies when a visualization fails, it rarely quantifies the mechanistic cognitive reasons *why*. This failure to identify the process behind visualization misinterpretation restricts the field’s ability to accumulate predictive design knowledge. Even when conceptual frameworks are presented with evidence for specific cognitive pathways of visual decision-making, they cannot computationally simulate user behavior or predict errors *in silico*. To bridge this gap, we present a computable, mechanistic model of visualization interpretation using Active Inference: a probabilistic process theory on the dynamics of living systems often applied to human perception, learning, and action-taking. Active Inference agents iteratively minimize the probability of surprising observations by adjusting internal belief states and choosing informative actions. Simulating human interpretation of data visualization in this context, we frame chart reading as a dynamic visual search, minimizing both uncertainty (epistemic value) and cognitive effort (pragmatic value) to reach success. As a foundational proof-of-concept, we engineer a set of Active Inference agents that perform a bar-chart average-estimation task under the dual-process theory of decision-making. Crucially, our architecture aims to replicate human perceptual vulnerabilities by presenting a Fast, heuristic (Type 1) agent prone to tick salience bias and a second Slow, analytic (Type 2) agent more prone to working memory decay. Both agents yield cognitive traces, including the evolution of belief uncertainty and the chosen visual fixation sequences. By distilling known failure regimes into interpretable parameters, we present this architecture not only as a proof-of-concept, but as a new framework for the role of empirical studies in visualization design. Fitting such mechanistic models to user data could support a shift from purely post hoc testing toward predictive *in silico* validation, allowing researchers to anticipate potential perceptual errors before a single chart is rendered.

