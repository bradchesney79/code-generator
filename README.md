# Make Code with Code

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

A flat configuration object can contain hierarchy data in the components (parent: parent-component)

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

## Upgrade Path
