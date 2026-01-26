# Ed by LAUSD

Date: January 22, 2026

## Intro

I recently learned about Ed, a now-defunct AI project led by Superintendent Alberto Carvalho in the Los Angeles Unified School District (LAUSD). Ed’s failure was especially disappointing to learn about because I grew up attending LAUSD schools from K–8; I attended a charter high school because my mom believed I’d have a better chance of going to college if I attended a charter school instead of my local public high school. Not every family has this option, so I am a huge advocate for initiatives that improve outcomes for students in public schools and am a strong believer that technology is the most effective way to achieve this at scale—particularly in large urban districts like LAUSD that serves ~500K students and rural, distant districts like Sheridan County Schools serving ~4,000 students.

While Ed has become a popular argument against AI in public schools, any technology would have failed under LAUSD’s vision (absent the failures by AllHere, the AI vendor whose CEO was later charged with fraud). After learning about this project, I wanted to take time to document and share Ed's objectives, challenges with technology deployment in public education, and examples of effective edtech deployments.

## Ed

Carvalho sold Ed as an AI-powered tool for students, parents, and teachers that aggregates district data to help improve student learning, increase attendance and engagement, and give teachers real-time insight into student performance. During ASU + GSV Summit in 2024, Carvalho went through his vision for Ed and the role it would play in the student experience; based on his keynote and panel discussion, below are the objectives Carvalho explicitly mentioned and how Ed’s capabilities would achieve those objectives:

|  | Objectives | Capabilities |
| --- | --- | --- |
| 1 | Create personalized learning pathways for each child |  |
|  |  | Build and use individual data profiles (attendance, academics, preferences) |
|  |  | Adapt content to reading level and language style |
|  |  | Deliver targeted learning activities in one platform |
|  |  | Nudge and incentivize students based on their profiles |
|  |  | Update learning paths from interaction data |
| 2 | Turn district data into actionable insights |  |
|  |  | Integrate attendance, health, academic, and demographic data |
|  |  | Generate daily indicators of student status |
|  |  | Aggregate progress data at classroom, school, and district levels |
|  |  | Inform professional development and resource allocation |
| 3 | Improve attendance and inform families about patterns |  |
|  |  | Send alerts on lateness and absences |
|  |  | Flag chronic absenteeism from historical data |
|  |  | Connect families with attendance counselors |
|  |  | Communicate in multiple languages for clarity |
| 4 | Equip parents with accessible tools and information |  |
|  |  | Provide a parent portal for performance and school information |
|  |  | Support up to 100 languages and varied reading levels |
|  |  | Enable single sign‑on across devices |
|  |  | Deliver routine updates on schedules, meals, and weather |
| 5 | Increase student engagement and sustain participation |  |
|  |  | Curate games, activities, books, and resources by interest |
|  |  | Embed music and entertainment elements |
|  |  | Adjust interaction style to student preferences |
|  |  | Maintain a consistent, student‑facing persona |
| 6 | Support staff with data‑driven instruction and decision-making |  |
|  |  | Supply timely insight into student progress |
|  |  | Highlight student needs and strengths |
|  |  | Aggregate data to guide PD and supports |
|  |  | Automate monitoring and data synthesis tasks |
| 7 | Develop students as AI creators |  |
|  |  | Provide AI access within the district environment |
|  |  | Normalize AI use in learning contexts |
|  |  | Expose students to AI‑mediated problem‑solving |
| 8 | Unify curricular and digital resources in one interface |  |
|  |  | Integrate third‑party content providers into Ed |
|  |  | Route students to partner content without extra log‑ins |
|  |  | Support use across common devices with single sign‑on |
|  |  | Standardize access through a shared platform |
| 9 | Manage practical aspects of school life |  |
|  |  | Show school meal menus and daily weather |
|  |  | Send reminders for events and deadlines |
|  |  | Connect students to homework help in‑platform |
|  |  | Provide real‑time bus arrival information |
|  |  | Centralize academic and non‑academic services |

Keeping up with Carvalho in the [keynote where he first unveiled Ed](https://www.youtube.com/watch?v=TXUNr1j5CkU) was challenging. His confident storytelling paints a rosy picture around Ed’s potential but hides how impractical it is for AllHere and Ed to solve this laundry list of challenges in school districts.

Building a high-quality product around even one of these objectives - such as “creating personalized learning pathways for each child” - can take years to polish. A general purpose product that targets learning, teaching, absenteeism, communication, and analytics compounds the resources necessary to build a functional, reliable prototype. This ambitious undertaking was most likely led by AllHere, the AI vendor, to increase the size of the contract, but this unrestrained ambition is also what set LAUSD up for failure.

## Out of scope

When I first joined consulting, I was confused by partners’ intense focus on outlining, in detail, the deliverables for our projects. Partners worked diligently on defining the questions clients wanted answered, the work product that will help answer those questions, and the timeline for project milestones. Particularly in short projects it was critical for the team to focus on reliably answering the predefined questions clients wanted answered; our day-to-day tasks revolved around the work product (analyses, interviews, or research) that helped uncover answers. Over time, the value of having clear objectives and aligning resources around that objective became clear to me. Otherwise, it’s easy to get pulled by seemingly productive tasks that don’t contribute to the objective and result in wasting time and resources.

In consulting, the impact of inefficiency was immediately felt by the firm: late deliverables meant current projects were extended (at no additional cost to the client) and new projects were delayed (and sometimes lost). In education, that same visibility into the impact of failed projects does not exist; but expensive projects like Ed, in addition to the millions of lost taxpayer dollars, lead to the continued failure to give students the best possible education, which is arguably the greatest loss but least visible.

The high stakes of public education, whose goal is to prepare students for future academic and professional opportunities, suggests that a similar disciplined approach in technology projects is necessary to improve outcomes for students as quickly as possible. I am bullish on AI’s ability to address existing gaps in public education, but this post is about the growing responsibility for district leaders to rigorously focus technology deployment around desired outcomes and district priorities.

The biggest limitation to this approach, however, is the political nature of the superintendent role, who is beholden to the members of the board of education where board members each have priorities that aren’t necessarily improving student achievement. The lack of alignment presents a huge vulnerability to the effectiveness of district leaders while they are focused on managing different agendas. On top of competing priorities are the simultaneous, urgent challenges school districts face: operational inefficiencies, learning loss, absenteeism, teacher shortages, and teacher wages, among others.

## Narrow way

Over the past few days, I’ve been focused on the concerning math and English test scores in elementary schools. In the elementary school I attended, for example, only 19% and 22% of students meet or exceed state standards in math and English, respectively; given that most of the students’ parents at my elementary school did not graduate from high school, public schools are the main (and sometimes only) source of learning. So it is particularly urgent for schools to address learning gaps with immediacy. Specialized edtech solutions, at the moment, offer the most scalable and efficient avenue for school districts.

Fortunately, there is a growing number of edtech startups addressing specific challenges in education, which reduces the bandwidth required from districts to drive high-impact technology initiatives. This isn’t a market map but I want to include a positive example of what I mean by specialized edtech companies. Staying on the topic of math learning, I recently discovered Innovamat, an edtech company focused on improving math proficiency for students in K-8.

Innovamat has built a math learning platform that revolves around the lifecycle of learning: curriculum planning, instruction, and measurement. Additionally, Innovamat offers parents resources to support their students’ math learning at home and runs an internal research center to improve the efficacy of their programs. This rigorous focus on math learning has helped students improve math performance on standardized tests in schools globally (see [here](https://blog.innovamat.com/en/research-study-results-on-the-impact-of-innovamat-on-standardized-tests/)).

This narrow approach to supporting schools is a stark contrast to LAUSD’s partnership with AllHere. Innovamat’s scope is limited to math within a specific age group. Innovamat is only one example of specialized edtech companies: Curipod addresses English and social sciences, ClassDojo addresses engagement, Clayful addresses student mental wellbeing, among other. Successful deployments of narrow technologies for education have made a positive impact across levels in the education system: districts, schools, parents and most importantly, students. 

It may be harsh to focus on a big swing Superintendent Carvalho took 3 years ago with AllHere. And I recognize that solutions to the deep-rooted problems in public education will be through ambitious initiatives and investments. But when missing the mark has such a profound and long-term impact on students' lives, there must be a higher standard for district leaders and technology deployments. Students deserve it.

