# Something I Once Saw or Heard Somewhere

I lovingly call this project The Chainsaw Factory. I conceived the idea to build my first Magnum Opus and then the second and so on-- forgive the obvious lingual gaffe. I once saw or heard someone say to meter your work appropriately. If you need to chop down one tree, an axe might suffice. Maybe a chainsaw would be better, but you may be waylaid if you take the time build all the things needed for a chainsaw factory as you probably don't need a constant stream of chainsaws at your disposal. I decided I needed a chainsaw factory, and this is it.

# Make Code with Code

Hello, thank you for coming. I am sorry this may be of questionable value to people operating in the enterprise space. The junk I am about to share is best used on medium sized and smaller things. Especially things where you just have to crank it out and move on.

## Who Are You?

My name is Brad. I am a devops guy. I started out in school which taught .Net and MS Tech in general. Didn't have the couple thousand it would have cost me to practice and hone my craft in my spare time. Started dabbling in UNIX/Linux 14 years ago, stopped dual booting 10 years ago. Kubuntu on my daily driver, currently OSX for work (I didn't pick it-- at least it isn't winblows), prefer Debian on servers-- usually log into Red Hat/Cent/Fedora or Ubuntu. This is my first specifically Linux convention as well as my little guy over there.

## Mundane Repetition

At every job some CRUD app either in the main product or as a support tool needed built whether I was a manager or a dev or even as a little league coach. Literally, taking some related data and manipulating it in the same ways trying to adhere to best practices-- an attempt to write code like a robot applying every good idea uniformly on a consistent, infallible basis.

Just about every app had a user. That user had a name. A name in the database as text. A name in the Data Access Layer that simplifies dragging persistent data out of the Database or similar as text. A name in your base layer objects as text. A name somewhere below your webroot directory in an API endpoint that used the base layer object as text. And a name to read, update, and delete in your UI views as text. Then also checking the things associated with a name in your unit tests for the back end and your automated front end tests pretending to be infomercial people-- {{ audience participation -- as text }}.

It is predictable, it is repetitive, inhuman consistency is of value. This sounds like a job for a computer... almost tailor made for a computer. Computers writing code, all those developers you work with... fired after today. Right?

How many of you work adjacent to developers or have the "opportunity" to wear that "hat"? Remember, they are not problems, they are opportunities.

I only have one layer completely finished to my satisfaction to demo-- but I would like to believe you all have the capacity to imagie it propagated through the other layers


## Conclusions Thus Far

Security:

Little to none

There is no mechanism to currently prevent bedlam, chaos, or anarchy

I was recently shown it is specifically subject an infinite recursion caveat via cyclical hierarchy
( a parent object refers to any descendant as a parent )

Flat:

A flat configuration object can contain hierarchy data in the components (parent: child-component)

NodeJS:

Pro - It handles JSON objects natively

Pro - It is as of late almost always available on servers I am voluntold to use

Pro - Specific to me, I have tooling to properly debug and inspect SNAFUs versus other languages

Con - It is javascript

JSON Configuration Object:

Pro - Compact

Pro - Quasi-Human Readable

Con - No comments allowed in valid JSON

Con - No comments allowed in valid JSON
( Mitigated by stripping single line JS comments with regex replacement to ""... (.*)(?:\s)?\/\/\gm ) 

* (this is just here to stop italics in the .md doc)

## Upgrade Path

So, I've spent a lot of time with upgrading-- because there is always some problem. Get rid of upgrades.

The data has a particular structure that relationships can be derived from-- most of the time the data can be given a sane Extraction, Tranformation, and Load (ETL) to a normalized and not inherently broken form --there are all kinds of benefits to having not broken data. Have good data. When wearing the systems guy hat, I have fewer problems and crap to deal with when the devs are not being forced to do gymnastics to get around some shortcoming in the data.

That isn't necessarily a software upgrade, but it is all kinds of good. Advocate for not broken data.

You've got good data, and the structure is amicable to being flattened, great.

Getting rid of upgrades!?!? That is crazy.

Is it?

I am picturing taking two days to build a fairly comprehensive configuration object and having a rewrite 90% complete before any of my peers finish their coffee the next day. Why bother upgrading when rewrites become so much less painful? The fiddly code can be cut and pasted from the old app into the files just waiting for what can be less than logical business / legal requirements parts.

### Why bother upgrading when rewrites become so much less painful?

I look forward to trashing servers that are just so far off the rails that they are almost not salvageable. This is possibly a path for those crummy internal apps that do not need to be anything special. Just like your similarly unremarkable CRUD app that does not need to be on a fragile ancient install which was a long way around why you might care about this.
