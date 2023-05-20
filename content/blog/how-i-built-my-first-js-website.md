---
external: false
title: "How I Built my First JavaScript Website."
description: "A little late to the JS party."
date: 2021-12-19
---

I suppose there's quite a bit to unpack in this title. There is a lot that goes into building a website after all. We need to consider:
• The idea for the website
• The design of the website
• The development of the website

So what will I be writing about here? Well, it'll be a bit of everything. This post will serve as a summary of the entire process from A-Z. I won't go very deep into how each step was done, considering that would make for a very long post, but I'll link out to other posts where I go into further detail, where relevant. I'd also like to caveat that I am no expert, but this was how I did it as a "student" of web development.

Here goes.

## 1. Identifying a problem + solution

So I knew I wanted to build a website to put what I've been learning into practice. But of course, the big question is - what should it be about? And it's an important one to consider, given that I was going to be spending quite a bit of time on it.

I think most individuals picking up programming/web dev like to build websites for the sole purpose of showcasing it in their portfolio, which is a fair approach, but I tend to approach it differently. I discuss it in greater detail in this post (WIP).

In summary, I think building things that people can actually use, with the potential for monetisation in the future, is an effective motivator to deliver a solid product. And to come up with something people can use, you need to identify a problem and a solution that solves it.

In this case, I was personally having trouble tracking a GMK keycap groupbuy I supported. For those uninitiated into the world of custom keyboards, Taeha Types has some solid videos on his YouTube channel. There's a cult following for this hobby, where individuals essentially build expensive, premium mechanical keyboards. Individual components, however, can take months to years to arrive due to their low production volumes. And so I was facing a problem tracking one of these individual components - a keycap set in this case.

I had my problem. The solution itself was simple - nothing too genius. I was constrained by my technical knowledge after all. But the idea was to basically build a site that could showcase the progress of these groupbuys during the fulfilment process - similar to Kickstarter updates.

## 2. Validating the idea

Now that I had an idea, the next step was to validate it. This step was only applicable for me because I was looking to build something that people would use, so I needed to have some sort of validation to determine whether the problem I personally faced was one that was large enough and worth building for.

I discuss more on how I did it in this post (WIP), but I basically surveyed and interviewed various individuals within the industry to gauge their interest.

## 3. Identifying key MVP features

The mind is a powerful thing. I couldn't help thinking of the 1001 cool features I could add to this website. But I knew I had to constrain myself. What were the most necessary features that would actually help solve the problem? Read more about how I did it here (WIP).

After sitting down and giving it some thought, I had a short list of features that I believed were essential in having the product function - a minimum viable product.

## 4. Building a wireframe

The real fun begins here, at least for those who like messing around with the design. I built my wireframe in Figma, which consisted of the layout for all pages for both desktop and mobile views. Check out my process here (WIP).

## 5. Getting feedback on the wireframe

I'm no UI/UX expert, so I did another round of feedback for the wireframe through Reddit - seeking advice from professional designers and asking if I was committing any cardinal design sins. They were kind enough to share some really valuable feedback, which I then updated the wireframe with.

## 6. Developing the website

Finally, I began the arduous, but exciting journey of actually building out the website. There's a bit too much to unpack on this, so feel free to read more about how I learnt to code here (WIP) and how I actually coded this website here (WIP).

## 7. Refactoring the website

This probably won't apply to everybody, but the codebase for the website was a mess at the end of the day. I went in with no architecture or system, so files were just 1000s of lines worth of unreadable code. It wasn't scalable.

At that point in my journey, I was learning about different structures for writing out code - one of which was the MVC architecture. And so I decided to put it into practice, completely refactoring my code and segregating them into different modules.

And that was it - Punchin was done.

I've got a long way to go and the number of things to learn never seems to end., but I'm proud to have completed my first complex project.
