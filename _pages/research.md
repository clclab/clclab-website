---
layout: research
title: Our research
updated: 2025-05-08
published: 2025-05-08
---

Most of the research in the lab in focused on Interpretability methods in Artificial Intelligence. We apply them to LLMs, neural speech models, vision-language models, and time series models. We develop new interpretability techniques. Much of our work has been inspired by findings in linguistics, cognitive science and neuroscience, and a long term goal is to 'give back' to those fields, for instance by using AI models as scaffolds to build predictive models of neuroimaging data or by providing 'existence proofs' of possible ways in which networks of neurons might implement specific cognitive functions. {: .intro }

## Some things you might (want to) know us for:
- In 2023, 2024 and 2025 we published a series of papers on Speech-AI Interpretability. Check out our papers analyzing speech encoders (such as Wav2Vec2, Hubert), speech recognition systems (finetuned Wav2Vec2, Whisper), and text-to-speech models (such as Parler-TTS, Tacotron-TTS). We adapted some state-of-the-art interpretability techniques from the text domain (including the LogitLens, causal interventions) to the pecularities of speech, and developed some new techqiues (including Value Zeroing) to open up the blackbox of this increasingly impactful class of deep learning models.
- In 2023, we proposed Value Zeroing as a novel technique to understand the information flow in Transformer models.
- In 2020, we proposed Attention Rollout as a novel technique to turn the attention patterns in a Transformer into a input attribution method. In our 2020, the *attention patterns* were very simple (attention weight + 1 to account for the residual technqiue), but the technique has had many follow-ups where people have used more sophisticated choices for the atomic attention patterns.
- In 2018, we proposed *causal interventions*, as a way to assess whether probing results are truly reflecting the underling mechanisms in Large Language Models.
- In 2016, we proposed *diagnostic classification*, as a simple way to open the blackbox of Large Language Models. Our paper was published around the same time that two other papers appeared on arxiv (Adi et al. 2017; Alain & Bengio, 2017), proposing very similar ideas. The technique is now mostly known as 'probing', the terminology of the latter of those papers.
- In 2015, we presented the RNN-LSTM, now better known as the TreeLSTM, using terminology from the concurrently published paper of Tai et al.


<div class="references">
  <h4>References</h4>
  {% bibliography --cited %}
</div>
