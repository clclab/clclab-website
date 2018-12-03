---
title: "I know what you think!"
subtitle: "Reading minds, part 2"
published: 2018-11-23
categories: blog
layout: blog
author: Iris Proff
figure: "/media/posts/Linda-Jolink-reading-minds-2.jpg"
---

As we saw in the [previous post]({{ site.url }}{% post_url 2018-11-23-reading-minds-1 %}), we can decode someone’s visual experience from their brain activity using machine learning with increasing accuracy. This is pretty impressive already, however this is not quite what we understand as mind reading, is it? So let’s go a step further!
{: .intro }

## Decoding thoughts: the first steps

In terms of mind reading, we are not interested in decoding what a person *sees*, but rather what they *think* about. That is, we want to know which semantic concepts are represented in their brain. By semantic concepts we mean any coherent idea that can be represented in different ways. The semantic concept *bike* can be represented by the word bike, or by a sketch of a bike or, arguably, by a specific pattern of brain activity. 

It turns out we can apply the very same brain decoding approach described in the previous post to decode semantic concepts from the brain using *word embeddings*. These are models that map a word onto a numerical vector. This vector encodes semantic features of the word by capturing how often it co-occurs with other words in a large text database. Consequently, vectors of words that tend to occur together will be more similar than vectors of words that never occur together. Thus, word embeddings are yet another way to represent semantic concepts. They rely on a *distributional semantics* stance {% cite Lenci2008 -f refs_iris %}, claiming that the meaning of a concept is defined by the context it tends to appear in. In order to decode semantic concepts from brain activation, a machine learning classifier can be trained to learn the association between the two kinds of representations: brain activation and word embeddings. 

Tom Mitchell’s group in Pittsburgh pioneered this field with their 2008 paper in which they predicted brain activity evoked by the presentation of object nouns {% cite Mitchell2008 -f refs_iris %}. Since then, numerous word embedding models have been used to decode brain activity for single words or, more recently, even for whole sentences {% cite Wehbe2014 Perreira2018 -f refs_iris %}. This approach can help answer two essential questions. From a cognitive neuroscience perspective:  Is feature X of semantic concept Y represented in the brain and if so – where? From the computational linguistics perspective: Which of different word embeddings best captures the neural representation of concept Y?

{%
 include figure
 image_path="/media/posts/Linda-Jolink-reading-minds-2.jpg"
 alt="A rabbit and a brain"
 caption=""
 credits="Illustration by Linda Jolink"
%}

## What does brain activity represent?

While the advances in this field are fast and exciting, it is important to take a step back and reflect about the underlying assumption. What does it mean that a semantic concept is represented in the brain? As discussed in the previous post, for visual representations, there is an obvious analogy between the input image and the neural activation pattern. This is not the case for semantic concepts. In fact, what a neural representation of a concept is and if it exists is a heavily debated question.

The *hub-and-spokes theory* {% cite Ralph2017 -f refs_iris %} postulates that a concept is represented by activation of its sensory and motor features in sensory and motor areas of the brain, i.e. the *spokes*. The concept *tree* for instance might elicit activation in the visual cortex corresponding to a visual perception of a tree. At the same time, it might activate neurons that code for ‘climbing’ in the motor cortex and the linguistic representation of the letters *t-r-e-e* in language regions of the brain. Moreover, the theory states that there is a centralized *hub* in the anterior temporal lobe, which mediates between these features. In line with this, semantic concepts elicit activation patterns that span across the whole brain. However, the theory does not clarify if the representation of a concept is task-specific. In other words, is the concept *bike* activated in the same way in your brain, no matter if you read the word *bike*, if you imagine a *bike*, if you look for your *bike* at the parking lot or if you search your memory for the French word for *bike*? It is quite unlikely that this is the case.

Therefore, researchers have recently proposed to use word embeddings designed to solve a specific task, such as a model designed for machine translation or sentiment analysis. Conclusions about neural representation of concepts should then be restricted to this one task {% cite Gauthier2018 -f refs_iris %}. Moreover, they highlight that the feature space, so the collection of features that characterize a concept, should be subdivided into different categories. For instance, the co-occurence of a word with sensory and motor verbs, such as *see*, *hear* or *move*, is a semantic feature. Conversely, the class of a word, such as noun or verb, is a syntactic feature. For each type of feature, voxels can be selected whose activation can be predicted with a higher accuracy than chance. Otherwise, if we use generic word embeddings containing various types of features, we cannot find out more than that the brain encodes *something* that the model also encodes.

## Sharing knowledge

If this fusion of neuroscience and machine learning ought to be successful, computational scientists must engage in some considerations about the nature of the data they are working with. fMRI data is not equivalent to activation of brain regions. Instead, is a measure of the contrast of oxygenated and deoxygenated blood, which is assumed to change when many neurons are activated at the same time {% cite Logothetis2008 -f refs_iris %}. To interpret this data, it needs to be pre-processed using complex procedures that involve many decisions and parameters, that have to be carefully chosen and reported by researchers to make results comparable between studies. Another issue is the selection of which voxels to analyse. When investigating semantic concepts, it is reasonable to take the whole brain into account, rather than selecting a region of interest. However, a vast network of small voxels spread across the whole cortex is hard to interpret. *Searchlight analyses* that consider the information carried by a set of adjacent voxels can reduce the complexity of the results, make them more robust, and easier to interpret {% cite Kriegeskorte2006 -f refs_iris %}. Finally, timing is crucial. Usually, an fMRI brain scan from a single time point is used as input to the classifier. Consequently, information about the dynamics of semantic representation is lost. Different timings of the points of the experiment might yield very different activation patterns. 

This is the current state of this research field, from which we conclude that we cannot yet read thoughts from brain activation. However, if computational linguists and cognitive neuroscientists continue to share their expertise with each other, one day we might get there.

<div class="references">
  <h4>References</h4>
  {% bibliography --cited --file refs_iris %}
</div>