# SCRIPT

## Intro?

Hi everyone, as Dr. Patton said, my name's Ali Alkhatib, and I'm the director for the Center for Applied Data Ethics. And I'm so excited to get to speak to you all today because I want to share something that's been frustrating me for a while, and now more than at any point in my career I feel like I have the language I've been looking for to talk about it.

The most concise way I can say what's been frustrating me - so concise that I'll need to spend the next 40 or so minutes trying to unpack it - is to say that...

**The colonizing power of AI, and to an extent HCI and design thinking, has enabled researchers to trade one kind of problem for another, largely for our own benefit, and often to the detriment of the people we're supposed to be accountable to.**

This was where I started. Something about that analysis felt... insufficient, so I got caught up trying to figure out this thread of thinking. It felt so knotted up and twisted, and I felt tangled up in this frustrating and sinking fact, that I've spent years desperately trying to work this knot apart as it pulled me deeper into the metaphorical water.

But that's why I'm so relieved, and excited, to talk about this stuff with you today; because I think I've finally basically untangled it, and I want to lay this out so that we can talk about it together and figure out where to go from here. And, I don't know, if any part of this looks like a knot that you've been carrying around, maybe something I say here will help you untangle yours.


So to tell this story, I'm going to tell you about a couple of papers that were instructive in getting to the knot: first I'll tell you about street-level algorithms, and about the kinds of administrative violence that algorithmic systems cause, and how that lens brings a bunch of stuff into sharper focus. And I'll tell you about how that theory translation work can be a helpful tool for making sense of the world.

And then I'll tell you about how frameworks - how translation work itself - can become toxic and harmful when we try to use it to rewrite the world in our own vocabulary. I'll tell you about "To Live in Their Utopia", the paper I wrote that describes this tendency for centralizing systems to impose their own models of the world upon us, and how the power we allow them to wield enables profound harm upon the most marginalized communities.

That realization on my part helped me make sense of a lot of work I've done up till now:

- reframing crowd work and gig work as a reformulation of piecework;
- deconstructing the digital contact tracing proposals that Google and Apple rushed out in 2020; and
- critiquing how academia ascribes authority to *certain* kinds of knowledge, especially to the detriment and ultimately the erasure of lived experience and knowledge

So the talk is going to look like this:

1. I'm going to tell you about **street-level algorithms** and **to live in their utopia**, because to me these are very much two parts of the same story, and because these were the pieces that I think got me to confront the knot I was talking about earlier, and start to disentangle it, and gave me a perspective on a lot of what I've done in general.
2. Then I'm going to reflect on some of **my past work through this lens** I didn't have before, and how the things I was writing about and the ways I was writing about them came into focus *for me* in a way that they didn't before.
3. And then, since I can, I'm going to talk about how **the stuff I'm doing *right now*** factors into all this. Because it's really neat when you come up with an analytical lens that brings past things into perspective and into focus, and then you turn it around and try to use it on totally new stuff and it brings all this new stuff into a new perspective with all of these sharp edges to it.

But, before I begin...

> As I was writing this whole talk, I realized that every time I introduced a paper I wrote, or a project I worked on, it started with "So there I was, frustrated about...". I'm going to say right now that I do what my advisor and I jokingly called "rage-based research"; something frustrates me, and I get so frustrated by it that I get over the writer's block and anxiety and everything else and I start actually searching for words. I'm not apologizing for being **frustrated** with a world that could be better and must be better... but I will apologize for not looking up "frustrated" in a thesaurus. I'm sure it'll get... exasperating, vexing, and aggravating. Okay I'm done, sorry.  


### Street-Level Algorithms & To Live in Their Utopia

## street-level algorithms
So a while back I was trying to figure out what frameworks and languages would give HCI researchers the traction they need to appropriately situate the socially consequential roles that algorithmic systems occupy. Another way of saying that is, I was watching a lot of YouTube and hearing from a lot of content creators about how the algorithm that demonetizes videos for being "advertiser-unfriendly" would make these incomprehensible decisions to demonetize journalistic coverage of white supremacist content and to demonetize people talking about their gender identities, while readily monetizing content that superficially appeared kid-friendly, but was in fact extremely problematic and in some cases very violent. These algorithmic systems were making what seemed like capricious decisions that made a kind of marginal understandable sense. But these decisions were clearly absurd when taken in as a whole. I felt that if we could come up with a socially grounded framework to discuss this frustrating phenomenon, we might be able to finally build more just algorithmic systems on more solid ontological foundations

So Michael Bernstein and I ended up writing about "street-level algorithms", riffing on this idea Michael Lipsky introduced some 50 years ago about "street-level bureaucracies". In his book, he writes about how all the power of a bureaucratic institution is kind of nebulous, and that it truly coalesces at the level of street-level bureaucrats, where police make a decision to pull someone over *or not*, where a judge decides to let someone out on bail *or not*, where a clerk makes a decision about whether to accept a copy of a document or an expired document *or not*. Where, and importantly *how*, a street-level bureaucrat applies rules is enormously important. It's important because there are so many administratively defensible ways to go about doing one's job, and so the decision that a person makes about which rules to apply, or which rules to overlook, become very pointed decisions about whether to help or hinder a person's case.

These are all examples of street-level bureaucrats exercising **discretion** in varied ways to ultimately try to work toward some underlying goal within the context of the bureaucracy. If police actually pulled everyone over for driving even one mile per hour over the speed limit, people would be extremely frustrated - in the UK, speed trap cameras are the subject of fairly significant antipathy. Overly rigid applications of bureaucratic rules have even been used in the past as a form of protest, slowing down work simply by doing absolutely everything the person is supposed to do.


Street-level bureaucrats can enforce the spirit of the law and other regulations by making decisions in the moment about the mitigating or extenuating circumstances that make every case they handle a little bit unique. And unique in ways that they couldn't have necessarily anticipated or codified in advance. They make these choices informed by a world of nuanced caveats in a "moment of decision", reflecting on their role and the roles and purposes of the institution whose power they wield.

They both *have to* and *can* make decisions given mitigating circumstances and other factors precisely because their job is to fill in the gaps between explicit instructions & precedent, vs the reality of the world as the street-level bureaucrat encounters it. It would be impossible to work from a comprehensive set of instructions, and so the street-level bureaucrat's **discretion** ultimately decides whether and how rules are enforced at all.

So... the way we framed AIs as making classifications and whatnot in the "moment of decision" had a lot of similar qualities: these AIs are trained - so are bureaucrats; they experience routine and unique cases - so do bureaucrats; their decisions are (or should be) subject to auditing - same with bureaucrats.

The question we were trying to answer in the paper was "so... what's going wrong?"; if street-level bureaucracies serves as an analytically powerful tool to make sense of algorithmic systems, then where's the discontinuity, if there is one at all? What makes street-level algorithms meaningfully different from street-level bureaucracies?

The answer we arrived at was that street-level bureaucrats are capable of doing things that street-level algorithms simply are not: reflection, discretion, empathy, and, crucially: growth in the very same moment of decision.

What was wrong with street-level algorithms was that when they even learned from novel situations, it was only *after* they made the wrong call, got found making the wrong call, and got retrained. That "loop-and-a-half delay" meant that there was fundamentally no way for algorithmic systems designed as they are today to grow and change with society, the way street-level bureaucrats at least are able to.

This lens actually proved really useful. We found it elicited the texture of a bunch of problems that we could articulate as problems, but didn't have really good ways to talk about:

- YouTube content moderation;
- Quality control in crowd work; and
- Algorithmic bias in the judicial system, especially in bail setting

In each of these cases, the pattern we wanted to illustrate was pretty similar:

You have all of this training data. And you feed this data into your machine learning system, so your learning system generates a model - a decision boundary of however many dimensions - that it uses to classify things going forward. It can generate any number of boundaries, and the key is that the way you've implemented things mostly determines how it fills in the gaps between data points used to train.

Street-level bureaucracies do the same kinds of things; they learn regulations, they learn policies, they learn about past cases that inform how they're supposed to do their jobs. But there's no resource in the world that gives them explicit instructions about every possible situation that has arisen and will arise in the future. They just have to *fill in the gaps*.

In both cases, you have all of these clear examples motivating the decision boundary in the model. The model might be a mental model, or a computational model, but it's a model of how to make decisions.

So you send them out into the world, and they use the models they've generated to inform their actions.

but as time goes on.. people change, and culture changes, and the envelope of propriety and acceptability and circumstances all get pushed and shifts around.


Street-level bureaucrats, humans who live in society, change as they're exposed to new things, and as they experience new cases. And, crucially, people are capable of changing their mental model of the world as they experience the world, constantly updating how they deal with situations.

Here's the crux of the issue: algorithmic systems can't do that; they're always dealing with this "loop and a half delay" that we talked about earlier. The thing where they encounter a marginal case, make the wrong call, and *only then* get corrected and retrained.

and the result of that is that these systems, in settings of tremendous sensitivity and consequence for peoples' lives, are always slow, or even frozen, in a state more representative of the past than of the present, and forget about any hope or even notion of a better future to imagine or work towards.

Chris Gilliard, who you might know on Twitter as Hypervisible, said it really well in a recent Wired op-ed when he wrote that algorithmic systems are "... designed to bring the past into the future, and thereby prevent the world from changing".

So you could look at YouTube demonetizing trans YouTubers, and see - as those YouTubers discovered on their own through experimentation with the system - that the demonetization algorithm seemed to be conflate sex and gender together. The classification system appeared to be trained on data from a time that drew no meaningful distinction between sexuality and gender identity. As a result, YouTubers found their content demonetized when they used terms related to gender identity in their titles and descriptions *just as though it would have if they had used sexually explicit language*.

All this is not to say that YouTube's classification was justifiable, but that this is not surprising; historical documents - even legal documents up until *not that long ago* - conflated sexuality and gender. If one were to train a model on these public data, I would expect that model to fail trans people and people discussing gender - but *not* sexuality - fairly often by conflating them with sexually explicit material.

And you could look at other domains as well;

You could look at creative crowdsourcing work and see how asking crowdworkers to offer creative responses is going to be fraught with challenge. crowdworkers are deeply familiar with algorithmic work evaluation, and so they recognize how dicey a proposition it is to engage in any kind of creativity when the audience is effectively a fossil in the amber of past data. creativity in crowdsourcing isn't a challenge; the challenge is changing a culture that's correctly learned that most of the time they'll get punished for offering a creative or innovative answer.

And you could look at the state of the legal system and the outcomes of algorithmic bail-recommendation systems. Systems trained on stacks of data that reflect a carceral system born out of white supremacy and specifically anti-Blackness, criminalizing Blackness and making the punishments for those crimes - the labels for those defendants - much more severe. So, unsurprisingly, Black men and women faced much higher bail rates when the rate was set or even suggested by an AI. The system cannot imagine a different future - a better, more liberated future - because it's trained on old data. It will always be a loop and a half behind.

---

In all of these examples, these systems fail to grow and become better as a result of the data that trained them. Because they can't really get better; they can just be more precise about being bad. If AI reflects anything about human intelligence or even humanity itself, they reflect what we are when we give up on growth and bettering ourselves - when we look at everything we've done and we say that we should stay there, trapped in the past.


And part of the challenge, honestly, is that recognizing who are "marginal" isn't necessarily some easy question. Recognizing when a street-level algorithm is dealing with a case involving an especially vulnerable or historically marginalized person would require operationalizing the dimensions of marginalization in a way that's sometimes orthogonal to the marginalization itself. If the state has administratively erased a group, diffusing them into myriad other groups and denying them their honest, shared identity, then it's not necessarily obvious how a system trained on the state's data would recognize the underlying pattern of people being systematically harmed.


## utopia
And... this was a big part of what led me to write "to live in their utopia".

I said the street-level algorithms paper was only one part of the story; after we wrote that paper I felt... frustrated, again - about this bigger picture of how entire systems don't just make the wrong call at the margins, but how these systems marginalize in the first place. How do cases - how do *people* - get "marginalized"? or rather, what processes, or what systems, do the marginalizing?

I ended up digging into and writing about how the design of data-driven systems to model the world in particular ways creates these representations of the world that makes sense by the very limited logic of a computational model, but don't really represent the complexity, the depth, or the nuance of life as we experience it.

And, borrowing from anthro theory, I made the case that in the interest of supporting data-driven systems like AI, we were

1. administratively reordering the world;
2. elevating the belief and faith in AI as a better arbiter than we can be;
3. giving algorithmic systems the power to make life-altering decisions about people; and
4. weakening the civil discourse around AI and governance

I wrote about all of these cases, where we could talk about how the world was being re-shaped, ceded to algorithmic systems, how our lives were getting subsumed by the decisions of AIs, and how discourse around governance was weakening as AI's grip on governance got stronger. I wrote about

- autonomous vehicles and GPS systems trying to navigate through and around the world;
- body scanning technologies trying to flag "suspicious" people at airport security;
- the computational evaluation of PhD program applicants, trying to identify the best candidates for admission.

(I won't talk about all of them in this talk, but we can talk more about them later)

I wrote that these systems start by "making sense of the world" and then they "make the world make sense"; I want you to keep those ideas in mind as we get to the latter half.

Let's start with how they "make sense of the world" through a very particular representation of the world in data.

These representations of the data are... well, let's just say it: dumb. They're not just imprecise or inaccurate; they're just clueless about the broader context of the world in important ways.

So like... Step count data that suddenly drops for a few weeks might seem to represent something terrible or at least *bad* has happened; but they shouldn't necessarily. There are plenty of reasons that someone might suddenly stop taking 10,000 steps - like, for instance, if you moved across state lines while the CDC was recommending that you self-quarantine for some period of time.

Like, this actually happened. I moved across the country in 2020, and in an effort to follow the directions the CDC was offering at the time, I quarantined myself for 2 weeks as soon as I got off the plane.

I went from running 3 to 6 miles every single day, to... shuffling around a living room, for literally weeks at a time.

*We can talk about whether that advice should have included refraining from outdoor exercise away from people - like jogging alone in rural areas - but I'm not going to have that conversation right now; the point is I followed the guidelines*

My step counts immediately fell through the floor, which isn't surprising. All the numbers my watch tracked started to trend in the bad directions or whatever. All the encouragement my watch gave me turned desperate and pleading. I was fine. But to hear my watch tell it, I was on the precipice of some kind of awful spiral.


What's odd is that even the devices that track or can juxtapose your location by GPS data... don't. Or if they have any sense of where you are, they obviously don't correlate any of that with whatever the public health recommendations are at that time. When there were fires all over California rendering the Air Quality Index somewhere in the hazardous range, watch alerts begging the wearer to go for a run outdoors to hit a few targets seemed... dopey.

Now, why should my watch know that the CDC makes any particular recommendation? Maybe it shouldn't. And maybe it would be weird for it to recognize that imposing a move goal or a step count target in the days after traveling would probably be dubious, if not obviously dangerous.

By itself, it's just... well, dumb. The system tells me I failed, it makes me feel bad... But that's all it is; maybe for a few days I look at these graphs and I feel bad that my step counts dropped off and my activity streak has been broken and all of that. But that's it.

In *To Live in Their Utopia*, my problem wasn't that my Apple Watch didn't cut me any slack on my Move streak because I moved in the middle of a pandemic. And that's not when problems really arise.

I said in the paper that reordering the world to accommodate an algorithmic view of things is one of the first warning signs, and is definitely happening here, as it had been for decades arguably. If you only get credit for steps, then you're living according to a fairly ableist paradigm. But that notion emphasizing ambulatory exercise is fairly entrenched.

And I also wrote in the paper that broadly believing that the system you use just... *knows* what you need more than you do (a worryingly common refrain), reflects that second warning sign about elevating algorithmic systems as truer arbiters of knowledge than ourselves.

Things really take a turn when that third warning comes up - the critique about giving these systems power to punish you for failing to live by the rules and assumptions of the algorithmic world.

So when people use devices like Amazon Halo, which pins your insurance premium to activity tracker data, people with disabilities now have to fight this system for consequential life-or-death stakes. Their access to healthcare is predicated on and mediated by how convincingly they can convince an algorithm that they're behaving healthily. An algorithm with a functionally lopsided sense of activity and exercise.

And for absolutely everyone, this should still be concerning: these systems have some thin projections of your life as data but that has no idea what your life really **is**.

They make decisions that cause you material harm because the system insists upon you its representation of the world - it insists upon you the AI's utopia, where the patterns it's generated and the goals it's generated all make sense in the barren wasteland that it has constructed computationally, but that doesn't look anything like the world you actually live in.

In the paper, I called it "Their Utopia", because machine learning generates a model of the world where the things it has observed make a kind of sense, even if that's not entirely justified. Everything follows rules that the system has created and integrated into the model. Even if that model includes rules like "more steps == more fitness" or "less weight == good".

This is the third bit, distilled: when you fail to live in their Utopia - when you fail to hit the step counts or decide to take a break from a system that doesn't have any concept of rest days - when you fail or refuse to live in the Utopia of their construction, they punish you for it in whatever way they can. And, **increasingly, these algorithmic systems have the means to make that punishment really hurt.**

They go from "making sense of the world" to "making the world make sense" by whatever means necessary, even if it means crushing anomalies. even if you are an anomaly by its galling, limited sense of the world.

The Utopia paper ends with an admittedly pushy design recommendation to undermine the power of systems and to build in ways for people to escape from these oppressive systems. Because the power dynamic itself is a major mediating factor in whether systems produce absurd results in the first place.

If you're using a music streaming service and its recommendations are terrible - even absurd - you can often give feedback on that recommendation and get better suggestions going forward. Because the relationship between you and the system is relatively open-ended - both your ability to ignore the recommendations entirely, as well as your (maybe debatable) freedom to go to another streaming service - offers a check on the tendency of the system to drift into absurdity.

But in the environment of Amazon Halo, where you have vanishingly limited power over something like Amazon, or the health insurance company with which they collaborate for this product... what options does a wearer have to escape the absurd recommendations of an algorithm with unchecked power?

I will say, in one case several years ago, that teachers in West Virginia answered that question: when faced with the possibility of being forced to wear activity trackers as a prerequisite to getting health insurance from their employer, they went on strike and successfully defeated that proposal.




## thesis
So... that's how I got here. I had written these two papers - a paper that felt like breathing in, followed by one that felt like breathing out; with them together, I tried to make sense of the absurd constructions of the world that algorithmic systems manifest and impose on people. And I was starting to recognize that the common feature in all of these things was that I was looking at them *through* computers.

Well, that sounds dumb. Let me explain

I was struggling with this instance of a thing where we turned all of these very complicated problems with histories and personal stories and mitigating factors - risk management, creditworthiness, public assistance allocation, and more... - into these computational things.

In all of these examples, the thing I was so mad about was that HCI researchers - or computing researchers or design researchers or what have you - all of us looked at a problem and said "that seems intractable and hard; I wonder if I'll be able to make more progress on it if I can turn it into something else."

There's this thing like "**problem space arbitrage**" where you agree to take on a few new problems if it means translating the thing you're stuck with into a domain that's more tractable for you. You take a penalty - "a few new problems" - but if you're going to make progress on the original ones, then maybe you come out ahead because you're actually dealing with something you know how to handle.


And so we turn issues of tremendous complexity into game theory formulations and matching algorithms and all that. And we do it because we have these neat theorems and proofs that show how we can provide an upper bound of the complexity of this problem if we can recast it as a technological problem and not a social one.

That's the trick; if we do this problem space arbitrage of all of our current problems for technical versions of those problems, then - yes - we will take a bit of a penalty translating it into the domain we know. But... the hope is that once it's here as an engineering problem, we'll be able to make a lot more progress on it and end up ahead.

This isn't even that unique to CS, to be honest; I think every field tries to make sense of things in the terms and vocabulary of their discipline; economists frame a lot of things as econ problems, for instance.

Here's my problem: by translating everything into technical constructions, we've ended up with all these **new** problems related to the implementation of systems that are really complicated, technical, and often opaque.

So we're not just dealing with the decades and centuries of violence, exploitation, and oppression that we've been so reluctant to confront that now mentioning it will get you fired in some schools. Now we're dealing with that *and* we're dealing with neural networks and other elaborate machine learning technologies that are difficult for us, professionals who make these things, to reason and talk about.

But it gets worse; complex technical systems implicitly call for technical expertise to speak authoritatively about them. So in addition to the original problem, and in addition to the new problem of complex technical contraptions, we have this third problem where we've framed all of this as something for technical experts and *not for people experiencing harm* to speak about.

For an example of this, take a look at Sasha Costanza-Chock's writing on #TravelingWhileTrans, where they write about the demeaning experience of going through millimeter wave technology scanners, being classified as anomalous by the system, and having to step aside for additional scrutiny and violation. As they wrote in their piece, it's enough to discourage one from traveling.

To challenge the injustice of being misgendered at the airport, you have to describe the discriminatory way TSA agents have treated you. But now, with this computer vision technology, you also have to be able to document the technical details of how the computer vision system reads an image and conceptualizes a gender binary.

The world is fortunate for Sasha Costanza-Chock's existence and their writing that works through various aspects of this problem, but that shouldn't be a prerequisite to challenge and overcome harm. We've gone from having one problem to *still* having that problem, and now also dealing with gatekeeping behind technical knowledge.


What I was beginning to understand was that I had been writing about the world as an AI saw it, but that there was this layer beneath that. The layer beneath that was the world as Computer Science saw it, and how that paradigm informed "street-level algorithms" and "to live in their utopia". that everything had been rendered into puzzles that i was now deconstructing and trying to make sense of, but that the puzzles were not the real, lived world for literally anyone.


## Oh huh, so that puts things in perspective maybe?

Once I appreciated that, I think a lot of frustrations I had with HCI and with computer science came into focus all at once.

Things I had written and worked on in the past - piecework, digital contact tracing, even a critique I wrote about Stanford's HAI while I was a PhD student there - all of them started to make microcosmic sense as indexing those harms that I talked about before:

1. misunderstanding what is fundamentally a human problem;
2. insisting on translating that human problem into something to compute and optimize in a world that doesn't exist anymore, if it ever did; and then
3. shifting attention and notions of expertise from the people who live through these systems to the people who *build* these systems, crowding out and even erasing the people surviving that harm as experts of their own oppression unless they "learn to code"


### Piecework
5 or 6 years ago I worked with Michael Bernstein and Margaret Levi to propose that HCI researchers look at crowdsourcing and gig work as instantiations of this older phenomenon called "piecework".

We were frustrated - here we go again - with what seemed like a lot of parallels between the open questions in crowdsourcing and the history of piecework from more than a hundred years ago. It seemed as though so many questions - about the deconstruction of work, about workers' relationship with the labor they're doing, and more - were all so obviously resonant with wells of texts that we could have been drawing from.

So we outlined the emergence of piecework in the late 19th and early 20th century as a feature on the landscape of history - a story of labor and of tension between workers and management who wished to impose aggressive time tracking and piecewise compensation on workers. And I'm proud of all of the individual comparisons and analyses we did in the paper - of course, go read it and all that - but the thing that stuck with me was this basic idea that an array of technical problems had, all along, been this human problem with a deep history and rich story that I felt wasn't getting enough attention in the wider crowd work and "on-demand labor" world.

In that paper, I hope I illustrated how much you can learn if you start by digging further into the history of the place or phenomenon that you're trying to understand. That a centrally historical analysis of something like gig work can reveal so much insight - and tell you so many stories of struggle and courage and resilience - and that you can carry that with you to understand how the landscape ended up with the features on the horizon.

Because as designers it's easy to think only about the landscape as it exists today and more specifically imagine how it *could* exist tomorrow. It's easy *not* to think about how the landscape and the horizon came to look the way it does. But it's important - as important as your imagination - because a radically new future can only really be radical if you know what history you're breaking away from.

So I was starting to appreciate the piecework paper in a way that I wasn't appreciating it before, because
while I felt like it made a point,

I wasn't as sure at first if it was contributing the way everything else I had published was contributing to this much bigger, more complex picture that I was working on.

But it was; I can't think of a better paper that I could have written at the time that told this story of the history of piecework in a way that was relevant to HCI researchers, and also planted a seed in the ground

The piecework paper illustrated how we had these challenges that were all human - challenges about labor, about dignity, about worker power - and we did that "problem space arbitrage" and ended up with task sequencing and task load index surveys.


### Digital Contact Tracing
And that's important, because if you start to lose perspective of what the problem is and get caught up in the technical challenges that only superficially seem tethered to the human problem, you might end up working on a technological problem that has long since come undone and drifted away from the human problems underneath.


and you end up with proposals like the digital contact tracing projects that Google and Apple each floated. You can take similar lessons here as with piecework; that there was this human problem that we had lost sight of, and in its place was a series of technical challenges that didn't respect the real lived fears and challenges that people faced.

Now, to be fair, in March 2020 people were scared, knew vanishingly little about COVID-19, and everyone was looking for ways to help. With the growing understanding that contact tracing would be an important way to figure out how the virus is spreading - and to contact people to give them a chance to self-quarantine until they were confident they weren't sick as well - attention turned to scaling up contact tracing efforts.

Google and Apple quickly suggested digital contact tracing schemes that worked via bluetooth rather than GPS, and only kept track of *who you were around* for certain intervals of time. The insight for this rather tricky puzzle was that you could identify that two people had been around each other if their phones had the same signifying tokens, without either person ever actually speaking with each other. Our phones would routinely broadcast tokens for other phones to record, and we in turn would record the tokens other people's phones sent out. If at some point later, someone tested positive for COVID-19, they could signal that all of their tokens should be considered red flags, and everyone who happens to have those tokens would know that they had been exposed.

It really is a neat little solution to a rather challenging technical puzzle. But it was also deeply misguided.

For one thing, when people from marginalized groups talk about fear for their privacy, they're often not talking about arbitrary GPS coordinates as much as they're talking about *being associated with another person*.
In 2020 during protests against anti-Black violence, rumors circulated that Minnesota police were using digital contact tracing to flag anyone who had been *around* other protestors for any meaningful amount of time.

The point here isn't to litigate digital contact tracing, but to underline how the impulse to design and introduce technical solutions to a human problem like *trust* does nothing about the issue of trust, and introduces a litany of technical issues.

So I was so frustrated - there it is, keeps coming up - that I wrote about all these issues that came to mind back in March or April of 2020:

- frustrations like... that privacy is so much more complicated and sensitive than the proposals seemed to acknowledge;
- that the places of immense risk were overwhelmingly, then and now, the places and people where these technologies wouldn't work; and
- that the effort that would go into these non-solutions would distract us from what we needed to be advocating for - that we needed to demand real investment into people doing outreach and doing compassionate human labor.

In the time since then, Google and Apple deployed their digital contact tracing tools. And what happened was frustratingly predictable:

- Myriad vulnerable groups were left out of these systems entirely
- A lot of vulnerable groups have utterly lost trust in these systems, causing even more people to opt out or attempt to defeat or mislead the systems that didn't work amazingly in the first place because Bluetooth proximity isn't actually that great a proxy for air circulation; and
- these systems were and continue to be red herrings for the real work that governments at various levels in the US and around the world are still unwilling to commit to

So now instead of having a contact tracing problem, we have a contact tracing problem... all of these privacy problems, and trust problems, and accuracy problems.

The digital contact tracing post felt essentially like a reflection on how we have this monumental problem - the spread of COVID-19 and the suffering that it entails - and rather than committing to the obvious human-centered solutions, we embraced the technological solution.
And now, 2 years later, we *still* have a tremendous contact tracing problem involving investment in the human labor, trust in the system and process, and myriad other things; and now we also have all of these technical 

And there's one last thing...

### HAI and knowledge

just having all of these new problems wouldn't be the worst thing; I mean, arguably it's bad, but what really makes this situation so much worse is that seizing control of the vocabulary and discourse, turning it into a technical challenge for technical experts, creates an environment where the people deciding which members of the community are valid, legible, and worthy of inclusion falls to the technical experts who have co-opted the many human problems and re-defined the terms of our discourse.

The discourse around the safety of schools, prisons, myriad workplaces... Apple and Google have effectively pushed all of those aside on the promise that technology would eventually smooth all those issues over. Somehow.

And that was why I was so frustrated with Stanford's Human-Centered AI institute. Because as an organization based in the power of Computer Science - at Stanford, no less - the HAI's first steps were to bring in philosophy professors, bring in corporate investors and venture capital... but not bring in community members or community leaders in areas like Palo Alto or East Palo Alto, let alone in any area at all.


Again, I could make the point about missing the human story of the origins of HCI and AI - the staggering military investment that underwrote Silicon Valley and eventually Stanford's status as a leader in engineering and Computer Science. It would be incredibly remiss to go without mentioning at least that much.

And I could talk about how the reformulation of so many human questions would lead to a landscape of new problems that made even seeing the original issues more and more difficult. How arguments about metrics of fairness turn a conversation about a person's freedom hinging on a bail-recommendation AI into something confounding and technical rather than stunningly obvious.

But that's not what the HAI later became microcosmic of, to me at least. To me, the HAI became representative of what it looks like to have not asked for a seat at the table, but instead to have bought the table and to become the mediator of who gets to be at the table in the first place. And the consequence of that is that discourse is overwhelmingly dominated by people who are, if not technical themselves, then at least *legible* to Computer Science.

This is tremendously harmful, for a handful of reasons:

1. the discourse we end up with is bland and incremental; by effectively erasing radical voices because they're not legible to the hegemon, oftentimes the best we can hope for is that someone embedded in power and with a vested interest in the system stumbles upon what becomes for them a revelation. but even that's wishful. the more likely outcome is committees that study problems and make recommendations at the margins, doing as little as possible to change the larger structure because everyone's literally invested in the success of the companies and worldviews that have caused and continue to cause so much harm.

2. it weakens society broadly; it should be a scandal when a decision that changes the trajectory of our lives gets made by someone else without our input. and yet... the bearing that the public seems to have toward computational systems rendering decisions about all of us is less about the principle of our autonomy and more about the outcomes. i pin this on technocrats who have browbeaten society into accepting technology as a better arbiter of consequential issues than humans, and i think trading "consequential human issues" for "tricky puzzles" doesn't resolve the human issue, but probably mollifies us unjustly.

---

[JZ: again...i'd like a clearer connection to your thesis. because it's there, and in this case not only is the HAI instantiating the thesis across its multiple constituent projects, but it's also ...facilitating the power dynamic that realises the thesis or whatever. i think that's an important thing to dwell on.]

## a different future?

Phew. I didn't want to stop on a note about an organization that I wrote negatively about - it feels bad and I just don't like to end on a negative thought. And I realized that the timing was such that I could finally talk about what I've been working on at CADE, and how I hope to advance this perspective about the kinds of problems that AI and data driven systems create and exacerbate.

So, let's talk about future stuff really briefly:

I'm getting ready to hire a number of data ethics fellows, and hope eventually to hire more, whose work all center around the people who are forced to endure oppressive systems like the ones I talked about in my papers about street-level algorithms, to live in their utopia, and elsewhere. Together, we're all going to be designing a relatively involved curriculum of Data Ethics that offers a much deeper dive into some vignettes to illustrate broader patterns of power, violence, and oppression, and to try to find ways to investigate and study those in whatever configurations arise.

My hope is to bring together a group of people who basically see all of the stuff that I've been talking about - and more - as matters of public consequence; as human problems that all of us deserve a seat at the table for. Labor, environmental crisis, refugee and humanitarian crises, and so much more... the projection of technology onto these issues as "x for social good" is an effort to re-cast the underlying human challenge in a futile effort to find an easy solution to what is inescapably a monumental challenge.

Obviously I want to support their work and all that, but that's not all they're going to be doing. I want students coming out of their programs to have the opportunity to face this reality: that the data they're working with - whether they go into academia, or government, or private industry - that all of it represents so much more messiness than the data may suggest, and that entire lives are fleetingly represented in as little as a row of data on a table. I want them to understand that the data ethics issues they encounter are human issues projected onto a data structure, and that one role they can occupy to do real, meaningful good, is to do tear down the constructed nonsensical excuses that obstruct that fact.

[JZ: one last "relate this to your thesis" plea lol. point by point how does your vision for CADE either enact or refute the points of the thesis?]

I think I'm done, and I have tons of time, so I'd love to hang out and answer any questions if anyone has any. But first, thank you all for coming to my talk, feel free to contact me here or here or here. Okay, let's chat.