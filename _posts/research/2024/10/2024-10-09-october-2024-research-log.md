---
layout: post
title:  "October 2024 Research Log"
date:   2024-10-09 10:00:51 +1000
categories: research 
---

- Wed 9:
    - infinity is greater than any non infinity values
    - the mistake is, it just checked if the soc >= target soc, but not checked if the value is infinity or not
    - now it works by checking if it greater than target soc and the value is not infinity
    - somehow it takes time to do full simulation for one month, so just check it for 5 simulation days
    - 311
    - Pulp documentation
        - [Quick start](https://coin-or.github.io/pulp/main/includeme.html#quickstart) 
    - The LP need to be configured to handle driving state
    - Simple principle on using Pulp
        - Expression
            - Constraint: with right hand side sign
                - prob += x + y <= 2
            - Objective: without right hand side sign
                - prob += -4*x + y
    - for the LP, when the car status is on trip, just discharging using driving formulation
        - evcdc = driving discharging formulation  
        - cost = just house appliances and solar pv, without evcdc

    - do what you want and do it honestly
    - Let's see
        - the objective function is minimising total cost 
            - the cost consisted of two condition
                - at home
                    - house appliances - solar pv + evcdc
                - on trip
                    - house appliances - solar pv
        - soc
            - initial condition
                - at home
                - on trip
            - ongoing condition
                - at home
                - on trip
    - EVCDC is referred to charging discharging when the car is at home
- Wed 10:
    - Amphetamine Mac app could be used to keep Python process running while the screen id sleeping
        - Normally when the screen sleeps, the terminal processes will be paused, that's why, last night, the process didn't finish as I wake up and turn on the Mac
    - I think I should run the experiment while parallelly developing the data analytics project, the processing time for one month simulation is long
