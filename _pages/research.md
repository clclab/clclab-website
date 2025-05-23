---
layout: research
title: Our research
updated: 2025-05-08
published: 2025-05-08
---

Most of the research in the lab in focused on Interpretability methods in Artificial Intelligence. We apply them to LLMs, neural speech models, vision-language models, and time series models. We develop new interpretability techniques. Much of our work has been inspired by findings in linguistics, cognitive science and neuroscience, and a long term goal is to 'give back' to those fields, for instance by using AI models as scaffolds to build predictive models of neuroimaging data or by providing 'existence proofs' of possible ways in which networks of neurons might implement specific cognitive functions. 
{: .intro }

## Some things you might (want to) know us for:
- In 2023, 2024 and 2025 we published a series of papers on **Speech-AI Interpretability**. Check out our papers analyzing speech encoders (such as Wav2Vec2, Hubert), speech recognition systems (finetuned Wav2Vec2, Whisper), and text-to-speech models (such as Parler-TTS, Tacotron-TTS). We adapted some state-of-the-art interpretability techniques from the text domain (including the LogitLens, causal interventions) to the pecularities of speech, and developed some new techniques (including Value Zeroing) to open up the blackbox of this increasingly impactful class of deep learning models. See: {% cite pouw2024perception %}  {% cite deheerklootsHumanlikeLinguisticBiases2024 %} 
- In 2023, we proposed **Value Zeroing** as a novel technique to understand the information flow in Transformer models. See: {% cite mohebbi2023quantifying %}
- In 2023, we published two commentaries in *Nature*, to call for the urgent establishment of guidelines for the use of generative AI in science and scholarship. Our '**Living guidelines**' in adapted form, were adopted by the European Union. See: {% cite van2023chatgpt %}
- In 2021, we proposed **Cosine Contours**, a Multipurpose Representation for Melodies. This is part of series of papers where we explore advanced computational techniques to contribute to research on music technology and music cognition. See: {% cite Cornelissen2021ismir %} {% cite Cornelissen2020ismir %} 
- In 2020, we proposed **Attention Rollout** as a novel technique to turn the attention patterns in a Transformer into a input attribution method. In our 2020 paper, the *attention patterns* were very simple (attention weight + 1, to account for the residual technqiue), but the technique has had many follow-ups where people have used more sophisticated choices for the atomic attention patterns. See: {% cite abnar_quantifying_2020 %}
- In 2018, we proposed **causal interventions**, as a way to assess whether probing results are truly reflecting the underling mechanisms in Large Language Models. See: {% cite Giulianelli2018a %}
- In 2016, we proposed **diagnostic classification**, as a simple way to open the blackbox of Large Language Models. Our paper was published around the same time that two other papers appeared on arxiv (Adi et al. 2017; Alain & Bengio, 2017), proposing very similar ideas. The technique is now mostly known as 'probing', using the terminology of the latter of those papers. See: {% cite Veldhoen2016 %}, {% cite Hupkes2018jair %}
- In 2015, we presented the RNN-LSTM, now better known as the **TreeLSTM**, using terminology from the concurrently published paper of Tai et al. See: {% cite Le2015 %}


<div class="references">
  <h4>References</h4>
  {% bibliography --cited %}
</div>
