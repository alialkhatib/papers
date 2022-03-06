# SCRIPT

## Intro?

Hi everyone, as Dr. Patton said, my name's Ali Alkhatib, and I'm the director for the Center for Applied Data Ethics. And I'm so excited to get to speak to you all today because I want to share something that's been frustrating me for a while, and now more than at any point in my career I feel like I have the language I've been looking for to talk about it.

The most concise way I can say what's been frustrating me - so concise that I'll need to spend the next 40 or so minutes trying to unpack it - is to say that...

HCI's colonizing power has enabled researchers to trade one kind of problem for another, largely for our own benefit, and often to the detriment of the people we're supposed to be accountable to.

This was where I started. Something about that analysis felt... insufficient, so I got caught up trying to figure out this thread of thinking. It felt so knotted up and twisted, and I felt tangled up in this frustrating and sinking fact, that I've spent years desperately trying to work this knot apart as it pulled me deeper into the metaphorical water.

But that's why I'm so relieved, and excited, to talk about this stuff with you today; because I think I've finally basically untangled it, and I want to lay this out so that we can talk about it together and figure out where to go from here. And, I don't know, if any part of this looks like a knot that you've been carrying around, maybe something I say here will help you untangle yours.


So to tell this story, I'm going to tell you about a couple of papers that were instructive in getting to the knot: first I'll tell you about street-level algorithms, and about the kinds of administrative violence that algorithmic systems cause, and how that lens brings a bunch of stuff into sharper focus. And I'll tell you about how that theory translation work can be a helpful tool for making sense of the world.

And then I'll tell you about how frameworks - how translation work itself - can become toxic and harmful when we try to use it to rewrite the world in our own vocabulary. I'll tell you about "To Live in Their Utopia", the paper I wrote that describes this tendency for centralizing systems to impose their own models of the world upon us, and how the power we allow them to wield enables profound harm upon the most marginalized communities.

That realization on my part helped me make sense of a lot of work I'd done up till that point:

- reframing crowd work and gig work as a reformulation of piecework; <!-- how we start with a human problem, like issues of labor rights -->
- critiquing the digital contact tracing proposals that Google and Apple rushed out in 2020; <!-- how technical systems turn a difficult social problem into a mess of technical problems  --> and
- the formulation of elite centers, distanced from the world, and how we ascribe authority to *certain* kinds of knowledge, versus how we downplay and ultimately erase *other* kinds.
<!-- how the mess of technical problems make the knot look like a problem for technocrats, belying the core -->

okay, let's get to it.

## street-level algorithms

> As I was writing this whole talk, I realized that every time I introduced a paper I wrote, or a project I worked on, it started with "So there I was, frustrated about...". I'm going to say right now that I do what my advisor and I jokingly called "rage-based research"; something frustrates me, and I get so frustrated by it that I get over the writer's block and anxiety and everything else and I start actually searching for words. I'm not apologizing for being **frustrated** with a world that could be better and must be better... but I will apologize for not looking up "frustrated" in a thesaurus. I'm sure it'll get... exasperating, vexing, and aggravating. Okay I'm done, sorry.

I was trying to figure out what frameworks and languages would give HCI researchers the traction they need to appropriately situate the socially consequential roles that algorithmic systems occupy. What I mean is, I was watching a lot of YouTube and hearing from a lot of YouTubers about how the algorithm that demonetizes videos for being "advertiser-unfriendly" would make these incomprehensible decisions to demonetize journalistic coverage of white supremacist content and to demonetize people talking about their gender identities, while happily monetizing content that superficially appeared kid-friendly, but was in fact extremely problematic.

That led to us writing about "street-level algorithms", the way we framed AIs as making decisions in the "moment of decision" that was learning from novel situations too late to be able to grow and mature and change with society.

I call this smaller scope because we were framing this in a kind of individualistic way: we were talking about how machine learning systems generate these conceptual decision boundaries during the training phase; and when they're deployed, or tested, they run those boundaries, and cases end up on one side or the other of a line drawn. We were talking about what happens in these very small moments, and how that manifests as harmful decisions or classifications in all of these cases involving marginalized groups of people. We talked about

- YouTube content moderation;
- Quality control in crowd work; and
- Algorithmic bias in the judicial system, especially in bail setting

In each of these cases, the pattern we wanted to illustrate was largely the same:

You have all of this training data of what looks like a good case versus a bad case, like examples of good crowd work contributions versus examples of bad faith efforts in crowd work. And so your learning system generates a model - a decision boundary of however many dimensions - that it uses to classify things going forward.

What goes wrong is, again, largely the same in all of the cases we talk about in the paper: you have all of these clear examples motivating the decision boundary in the model, but as time goes on people change, and culture changes, and the envelope of propriety gets pushed and shifts around. Street-level bureaucrats, humans who live in society, change as they're exposed to new things, and as they experience new cases. And, crucially, people are capable of changing their mental model of the world as they experience the world, constantly updating how they deal with situations.

But algorithmic systems can't do that; they're always dealing with this "loop and a half delay" that we talked about in the paper, and the result of that is that these systems, in settings of tremendous sensitivity and consequence for peoples' lives, are always slow, or even frozen, in a state more representative of the past than of the present, and forget about any hope or even notion of a better future.

Chris Gilliard, who you might know on Twitter as Hypervisible, said it really well in a recent Wired op-ed when he wrote that algorithmic systems are "... designed to bring the past into the future, and thereby prevent the world from changing".


## utopia
A while back I wrote about how the design of data-driven systems to model the world in particular ways creates these representations of the world that makes sense by the limited logic of a computational model, but don't really represent the complexity, the depth, or the nuance of life as we experience it.

In that paper, I strove to pull together examples from across different spaces to describe them in the same context, because in my mind there's an undercurrent here - a shared fate or something, if you want - that I think needed to be underscored. I talked about all of these examples like

- autonomous vehicles and GPS systems trying to navigate through and around the world;
- body scanning technologies trying to flag "suspicious" people at airport security;
- the computational evaluation of PhD program applicants, trying to identify the best candidates for admission.

These systems start by "making sense of the world" through a very particular representation of the world in data.

These representations of the data are... pretty dumb. They're not just imprecise or inaccurate; they're just clueless about the world.

Step count data that suddenly drops for a few weeks seems to represent something terrible or at least *bad* has happened; even the devices that track or can juxtapose your location by GPS data don't seem to be able to reflect things like CDC guidance about self-quarantining for several weeks after traveling across state lines.

Now, why should my watch know that the CDC recommended I self-quarantine after moving across the country? Maybe it shouldn't. And maybe it would be weird for it to recognize that imposing a move goal or a step count target in the days after traveling would probably be dubious, if not actively harmful.

By itself, it's just... well, I said "dumb", let's stay with "dumb". But that's all it is; maybe for a few days I look at these graphs and I feel bad that my step counts dropped off and my activity streak has been broken and all of that. But that's it.

In *To Live in Their Utopia*, my problem wasn't that my Apple Watch didn't cut me any slack on my Move streak because I moved in the middle of a pandemic.

My problem was that fitness devices like Amazon Halo are now pinning your insurance premiums to activity tracker data, so people who are coerced into using this kind of system - one that tracks some thin projections of your life as data but that has no idea what your life really **is** - now suffer in real, material ways because the system insists upon you its representation of the world - it insists upon you the AI's utopia, where the patterns it's generated and the goals it's generated all make sense in the barren wasteland that it has constructed computationally, but that doesn't look anything like the world you actually live in.

And when you fail to live in their Utopia - when you fail to hit the step counts or exist in a gender binary or drive through walls and over lakes - when you fail or refuse to live in their Utopia, they punish you for it. They punish you for it because they want you to conform; they go from "making sense of the world" to "making the world make sense" - by smashing you and all of your depth into a flattened version more appropriate to the algorithmic model.


I actually have a whole talk about this on YouTube, but it's shorter and the context of the rest of this talk is probably lost, I guess. I don't know; it was a long time ago. Look, different background and everything.


## thesis

Anyway, I was struggling with this instance of a thing where we turned all of these problems - risk management, creditworthiness, academic potential, urgency of need of public assistance, and on and on... - into these computational things.

In all of these examples, the thing I was so mad about was that HCI researchers - or computing researchers or design researchers or what have you - all of us looked at a problem and said "huh, that seems intractable and hard; I wonder if I'll be able to make more progress on it if I can turn it into something else."

And so we turn issues of tremendous complexity into game theory formulations and matching algorithms and all that. And we do it because we have these neat theorems and proofs that show how we can provide an upper bound of the complexity of this problem if we can recast it as a technological problem and not a social one.

That's a little ungenerous; part of the reason that computer scientists are eager to turn things into computational modules is that there's a hope, down the road, that we'll figure out how to turn something from something like O(n!) to O(n) or even, very excitingly, O(1).

That's the trick; if we exchange all of our current problems for technical translations of those problems - even if we seem to have more of them for the moment - then someone might come along later and figure out a way to make this part of the problem or that part of the problem trivially solvable.

This is like... Map/Reduce at a societal level. I don't even know where you would start to try to index all of the documents on the web, but if you can define a Map function and apply it to each document, and then if you can define a Reduce function to aggregate all of those results, then you're surprisingly close to a rudimentary search engine. And if someone later figures out a more efficient way to do one of those components, then the runtime, the complexity, the cost of the whole task collapses.

Here's my problem: by translating everything into technical constructions, we've ended up with all these **new** problems related to the implementation of systems that are really complicated, technical, and often opaque.

So we're not just dealing with the decades and centuries of violence and exploitation and oppression that we've been so reluctant to confront that now mentioning it will get you fired in some schools. Now we're dealing with that *and* we're dealing with neural networks and other elaborate machine learning technologies that are difficult for us, professionals who make these things, to reason about.

But it gets worse; complex technical systems call for a technological expertise to speak authoritatively about it. So in addition to the original problem, and in addition to the new problem of complex technical contraptions, we have this third problem where we've framed all of this as something for technical experts and *not for people experiencing harm* to speak about. To challenge the injustice of being misgendered at the airport, you have to concisely describe the disrespectful way TSA agents have acted toward you, *and* you have to be faithful to the technical details of how the computer vision system identifies patterns in genitalia and reasons about gender.

The world is fortunate for Sasha Costanza-Chock's existence and their writing that works through various aspects of this problem, but that shouldn't be a prerequisite to challenge and overcome harm. We've gone from having one problem to *still* having that problem, and now also dealing with gatekeeping behind technical knowledge.


## Oh huh, so that puts things in perspective maybe?


### piecework
### Digital Contact Tracing
### HAI and knowledge

- piecework
- (digital) contact tracing
- HAI?
- What's CADE about then?
- Wrap up?

