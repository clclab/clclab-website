---
layout: page
title: Lab Meetings
---

#  11 September 2018

- **Coordinates:** 16:00-17:30 in the PostDoc Meeting Room F2.02
- **Paper:** Hale, Dyer, Kuncoro & Brennan (2018). [Finding Syntax in Human Encephalography with Beam Search](https://arxiv.org/abs/1806.04127)<br />
*Abstract.*      Recurrent neural network grammars (RNNGs) are generative models of (tree,string) pairs that rely on neural networks to evaluate derivational choices. Parsing with them using beam search yields a variety of incremental complexity metrics such as word surprisal and parser action count. When used as regressors against human electrophysiological responses to naturalistic text, they derive two amplitude effects: an early peak and a P600-like later peak. By contrast, a non-syntactic neural language model yields no reliable effects. Model comparisons attribute the early peak to syntactic composition within the RNNG. This pattern of results recommends the RNNG+beam search combination as a mechanistic model of the syntactic processing that occurs during normal human language comprehension. 

# 18 September 2018

- **Coordinates:** 16:00-17:30 in the PostDoc Meeting Room F2.02
- Agenda TBA

# 2 October 2018

- **Coordinates:** 16:00-17:30 in the PostDoc Meeting Room F2.02
- **Presentation 1**: Jaap Jumelet. [Do Language Models Understand Anything? On the Ability of LSTMs to Understand Negative Polarity Items](https://arxiv.org/abs/1808.10627)<br />
*Abstract.* In this paper, we attempt to link the inner workings of a neural language model to linguistic theory, focusing on a complex phenomenon well discussed in formal linguis- tics: (negative) polarity items. We briefly discuss the leading hypotheses about the licensing contexts that allow negative polarity items and evaluate to what extent a neural language model has the ability to correctly process a subset of such constructions. We show that the model finds a relation between the licensing context and the negative polarity item and appears to be aware of the scope of this context, which we extract from a parse tree of the sentence. With this research, we hope to pave the way for other studies linking formal linguistics to deep learning. 
- **Presentation 2**: Mario Giulianelli, Jack Harding & Florian Mohnert. [ Under the Hood: Using Diagnostic Classifiers to Investigate and Improve how Language Models Track Agreement Information](https://arxiv.org/abs/1808.08079)<br />
*Abstract.*      How do neural language models keep track of number agreement between subject and verb? We show that `diagnostic classifiers', trained to predict number from the internal states of a language model, provide a detailed understanding of how, when, and where this information is represented. Moreover, they give us insight into when and where number information is corrupted in cases where the language model ends up making agreement errors. To demonstrate the causal role played by the representations we find, we then use agreement information to influence the course of the LSTM during the processing of difficult sentences. Results from such an intervention reveal a large increase in the language model's accuracy. Together, these results show that diagnostic classifiers give us an unrivalled detailed look into the representation of linguistic information in neural models, and demonstrate that this knowledge can be used to improve their performance. 