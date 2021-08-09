---
title: "I know what you see"
subtitle: "Reading minds, part 1"
published: 2018-11-23
categories: blog
layout: blog
author: Iris Proff
image: "/media/posts/Linda-Jolink-reading-minds-1.jpg"
---

Ever since we started investigating the brain, neuroscientists have
dreamed about reading the human mind. Will we ever be able to look into
the brain and tell what someone is thinking? How would this even work?
{: .intro}

{%
 include figure
 image_path="/media/posts/Linda-Jolink-reading-minds-1.jpg"
 alt="A rabbit and a brain"
 caption=""
 credits="Illustration by Linda Jolink"
%}

## Decoding what you see: the first step

In the beginning of the 21st century, neuroscience took a first step towards reading the human mind. It was James Haxby’s revolutionary paper {% cite Haxby2001  --file refs_iris %} that documented the first successful reconstruction of visual input from brain activity. Haxby’s team conducted an experiment in which subjects were presented different kinds of images, such as cats or houses, while their brain activity was scanned using fMRI. Afterwards, the researchers trained a machine learning classifier to reconstruct which kind of image had been presented in that trial from the brain data. They were able to *decode* brain activity. That means they could tell with higher probability than chance which kind of image a person had seen, only by looking at what’s happening in their brain. This new approach is termed multivoxel pattern analysis (MVPA) and has a clear advantage: it focuses on information that is carried by *patterns of activation*, which might be spread across the whole brain. In contrast to that, conventional fMRI data analysis considers each voxel (a 3D pixel in the brain) by itself. This development coincides with the trend in cognitive neuroscience to focus on distributed neural networks rather than on separate specialized regions.

The assumption underlying this new approach is that neural activation patterns are *representations* of stimuli. For visual stimuli, what this means is straight forward. The visual cortex is *topographically organized*, meaning that neurons which are close together in the brain encode visual information which originates from places which are close together in the environment. Hence, neurons in the visual cortex literally mirror the visual stimuli they receive.

## Neuroscience meets machine learning

The world of neuroscience was highly excited about this step towards decoding human brain activity. But not only that, suddenly computational scientists gained interest in neuroimaging. Why? Even though the kind of data being examined is very different, the approach is analogous to image classification, the prime application of machine learning. You have a multi-featured data set, namely brain activation data, and your goal is to classify each data point into one out of a set of known categories, which are the corresponding visual stimuli. Soon, the applied models were further developed to generalize to stimuli which have not explicitly been learned, thus moving beyond classification into a fixed set of categories. For instance, the Gallant lab at Berkeley became famous for reconstructing the visual experience of subjects watching movies from their brain activity {% cite Nishimoto2011 -f refs_iris %}

{%
    include youtube
    id="nsjDnYxJ0bo"
    caption="Reconstructing movies from brain activity, Gallant lab at UC Berkeley, 2011"
%}

As research continues, the accuracy of vision decoding is likely to increase further and further. However, is this approach to decoding brain activity limited to vision? Or can we also decode someone’s thoughts from brain activation? These questions are tackled in the [next post]({{ site.baseurl }}{% post_url 2018-11-29-reading-minds-2 %})!

<div class="references">
  <h4>References</h4>
  {% bibliography --cited --file refs_iris %}
</div>