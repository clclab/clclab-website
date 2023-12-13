---
layout: blog
title: Syntactic Dependencies in Transformers and Their Relation to the Brain
author: Bram Fresen
updated: 2023-12-07
published: 2023-12-07
---

The internal activations of Transformer-based language models have been found to correlate with human brain activity in language processing. But what linguistic features drive this correlation? As part of his internship in the CLC lab, Bram Fresen studied how this model-brain similarity depends on language models' ability to represent syntactic dependencies. 
This study formed Bram's first research project within the [MSc Brain & Cognitive Sciences programme](https://www.uva.nl/en/programmes/research-masters/brain-and-cognitive-sciences/brain-and-cognitive-sciences.html), and was supervised by Marianne de Heer Kloots, Rochelle Choenni and Jelle Zuidema. Based on his work, Bram won a Master Student Award from the [Dutch Society for Brain & Cognition](https://societyforbrainandcognition.nl/index/), allowing him to present the results of his project at the annual NVP Brain & Cognition Winter Conference in 2023. This page contains a short abstract describing the main preliminary findings from Bram's ongoing research project, as well as a pdf of his poster and some supplementary references.
{:.intro}

Poster
-----------------
Click the thumbnail below to download a pdf of Bram's poster.
<a href="{{ site.baseurl }}/assets/pdfs/2023/BramPoster_NVP.pdf"><img src="{{ site.baseurl }}/assets/posts/2023/Bram_poster_thumbnail.png"></a>

Abstract
-----------------
Since their emergence, transformers have dominated the field of computational linguistics. Recent studies have shown a resemblance between the activations of transformers and the brain, but we have yet to determine what properties underlie this resemblance. Here, we investigated what role syntactic dependencies have in producing this resemblance. Specifically, we used functional magnetic resonance imaging (fMRI) data from the Mother of All Unification Studies (MOUS) in which participants read sentences with varying syntactic complexity. Note that, due to time constraints, only four participants from the MOUS were analysed, making the results reported here preliminary. The same sentences as used in the MOUS were fed through monolingual and multilingual transformer models, whose contextualised embeddings were then extracted. This allowed us to perform representational similarity analysis (RSA) between model embeddings and the MOUS’ fMRI data, specifically from the left posterior middle temporal gyrus (LpMTG). This resulted in a representational similarity (RS) score for each layer of the transformer models. The accuracy with which these transformers represented the syntactic dependencies present in the sentences was determined with a labelled structural probe called DepProbe. Next, we correlated the RS scores with the accuracy of the dependency representations. This analysis revealed three main findings. 1) Models that more accurately represent dependency information are more similar to the brain. 2) Monolingual models outperform multilingual models in both similarity to the brain and representing dependencies accurately. 3) The relationship between brain similarity and accuracy of dependency representations is mediated by syntactic complexity. All in all, the present study shows that syntactic dependencies are a critical part of brain-like language models.

<div class="references">
  <h4>References</h4>
  {% bibliography 
    --file refs_for_poster 
    --sort_by author 
    --order asc %}
</div>
