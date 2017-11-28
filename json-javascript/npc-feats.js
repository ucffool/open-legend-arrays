/******
The following JSON is an attempt at organzing NPC Featsprogrammatically. It's not perfect, but it's a start.
******/
{
  "Attack Specialization": {
    "tier": {
      "1": "With the chosen attack type, gain advantage 1. This bonus does not apply to bane attacks or boon invocations.",
      "2": "With the chosen attack type, gain advantage 2. This bonus does not apply to bane attacks or boon invocations.",
      "3": "With the chosen attack type, gain advantage 3. This bonus does not apply to bane attacks or boon invocations.",
      "4": "With the chosen attack type, gain advantage 4. This bonus does not apply to bane attacks or boon invocations.",
      "5": "With the chosen attack type, gain advantage 5. This bonus does not apply to bane attacks or boon invocations.",
      "6": "With the chosen attack type, gain advantage 6. This bonus does not apply to bane attacks or boon invocations.",
      "7": "With the chosen attack type, gain advantage 7. This bonus does not apply to bane attacks or boon invocations.",
      "8": "With the chosen attack type, gain advantage 8. This bonus does not apply to bane attacks or boon invocations.",
      "9": "With the chosen attack type, gain advantage 9. This bonus does not apply to bane attacks or boon invocations."
    },
    "select": [
      "melee",
      "projectile",
      "area"
    ],
    "method": "level",
    "effect": "damaging attack"
  },
  "Bane Focus": {
    "tier": {
      "1": "Whenever a damaging attack exceeds the target's defense by 5 or more, you may automatically inflict that bane. When making a bane attack to inflict the chosen bane, you gain advantage 2 on the bane attack roll."
    },
    "select": "bane",
    "method": "choose",
    "effect": "bane"
  },
  "Superior Bane Focus": {
    "tier": {
      "1": "Whenever a damaging attack exceeds the target's defense by 1 or more, you may automatically inflict that bane. When making a bane attack to inflict the chosen bane, you gain advantage 3 on the bane attack roll."
    },
    "select": "bane",
    "method": "choose",
    "effect": "bane"
  },
  "Bane Resistance": {
    "tier": {
      "1": "Gain +5 to your defense against the chosen bane.",
      "2": "You are immune to the chosen bane."
    },
    "select": "bane",
    "method": "choose",
    "effect": "defense"
  },
  "Boon Focus": {
    "tier": {
      "1": "When you invoke the chosen boon on a single target, you succeed automatically and do not need to make an action roll. You can invoke the boon at any of the power levels you could access via your other means. If the invocation is not a single target, success is not automatic, but you get advantage 2 on the action roll to invoke the boon.",
      "2": "You gain advantage 3 on your action roll to invoke the boon if you are not single-targeting. Additionally, you may invoke the boon one time increment faster, as follows: If the invocation time is a major action or move action, it becomes a minor action. If the invocation time is 1 focus action, it becomes 1 major action. If the invocation time is 1 minute, it becomes 1 focus action. If the invocation time is 10 minutes, it becomes 1 minute. If the invocation time is 1 hour, it becomes 10 minutes. If the invocation time is 8 hours, it becomes 1 hour. If the invocation time for a boon is 1 minor action, it can be invoked only once as a minor action, beyond that it can be invoked by expending a move or major action.",
      "3": "The effect at tier 3 varies based on the duration of the boon: If the chosen boon has a duration of 'sustain persists', you gain advantage 4 on your action roll to invoke if you are not single-targeting. Additionally, the boon is always active for your character and persists each round as a free action, rather than a minor action. If the boon is somehow temporarily cancelled, in the absence of other rules, you can invoke it again as a free action. If the boon has a different duration, you gain advantage 5 on your action roll to invoke if you are not single-targeting."
    },
    "select": "boon",
    "method": "choose",
    "effect": "boon"
  },
  "Damage Resistance": {
    "tier": {
      "1": "Your defense scores are increased by 3 against the chosen damage type.",
      "2": "Your defense scores are increased by 6 against the chosen damage type.",
      "3": "Your defense scores are increased by 9 against the chosen damage type.",
      "4": "You are immune to damage of the chosen damage type."
    },
    "select": [
      "precise",
      "forceful"
    ],
    "method": "choose",
    "effect": "defense"
  },
  "Energy Resistance": {
    "tier": {
      "1": "Your defense scores are increased by 3 against the chosen energy type.",
      "2": "Your defense scores are increased by 6 against the chosen energy type.",
      "3": "Your defense scores are increased by 9 against the chosen energy type.",
      "4": "You are immune to damage and harmful effects from the chosen energy type."
    },
    "select": [
      "fire",
      "cold",
      "lightning",
      "acid",
      "poison"
    ],
    "method": "choose",
    "effect": "defense"
  },
  "Evasive Footwork": {
    "tier": {
      "1": "When you move from a space adjacent to an enemy to another space not adjacent to that enemy, the enemy does not get the usual opportunity attack."
    },
    "method": "choose"
  },
  "Lethal Strike": {
    "tier": {
      "1": "You gain advantage 1 on lethal strikes. Up to 5 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally.",
      "2": "You gain advantage 2 on lethal strikes. Up to 5 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally.",
      "3": "You gain advantage 3 on lethal strikes. Up to 10 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally.",
      "4": "You gain advantage 4 on lethal strikes. Up to 10 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally.",
      "5": "You gain advantage 5 on lethal strikes. Up to 15 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally.",
      "6": "You gain advantage 6 on lethal strikes. Up to 20 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally.",
      "7": "You gain advantage 7 on lethal strikes. Up to 20 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally.",
      "8": "You gain advantage 8 on lethal strikes. Up to 25 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally.",
      "9": "You gain advantage 9 on lethal strikes. Up to 25 damage (not to exceed the total damage dealt) is considered lethal damage. Your attacks are considered lethal strikes whenever you fulfill one of the following conditions: Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them; Your target is within melee attack range of an ally."
    },
    "method": "level"
  },
  "Multi-Attack Specialist": {
    "tier": {
      "1": "Reduce the multi-attack disadvantage penalty by 1. Before attacking, you may declare that you are multi-attacking, and must state how many extra attacks (maximum of 2) you would like to make. ALL of your attacks this round suffer disadvantage equal to 3 times the number of additional attacks you declare (i.e., if you make 2 attacks, you suffer disadvantage 3; 3 attacks suffers disadvantage 6).",
      "2": "Reduce the multi-attack disadvantage penalty by 2. Before attacking, you may declare that you are multi-attacking, and must state how many extra attacks (maximum of 2) you would like to make. ALL of your attacks this round suffer disadvantage equal to 3 times the number of additional attacks you declare (i.e., if you make 2 attacks, you suffer disadvantage 3; 3 attacks suffers disadvantage 6).",
      "3": "Reduce the multi-attack disadvantage penalty by 3. Before attacking, you may declare that you are multi-attacking, and must state how many extra attacks (maximum of 3) you would like to make. ALL of your attacks this round suffer disadvantage equal to 3 times the number of additional attacks you declare (i.e., if you make 2 attacks, you suffer disadvantage 3; 3 attacks suffers disadvantage 6).",
      "4": "Reduce the multi-attack disadvantage penalty by 4. Before attacking, you may declare that you are multi-attacking, and must state how many extra attacks (maximum of 3) you would like to make. ALL of your attacks this round suffer disadvantage equal to 3 times the number of additional attacks you declare (i.e., if you make 2 attacks, you suffer disadvantage 3; 3 attacks suffers disadvantage 6).",
      "5": "Reduce the multi-attack disadvantage penalty by 5. Before attacking, you may declare that you are multi-attacking, and must state how many extra attacks (maximum of 4) you would like to make. ALL of your attacks this round suffer disadvantage equal to 3 times the number of additional attacks you declare (i.e., if you make 2 attacks, you suffer disadvantage 3; 3 attacks suffers disadvantage 6).",
      "6": "Reduce the multi-attack disadvantage penalty by 6. Before attacking, you may declare that you are multi-attacking, and must state how many extra attacks (maximum of 1 + half your level, rounded up) you would like to make. ALL of your attacks this round suffer disadvantage equal to 3 times the number of additional attacks you declare (i.e., if you make 2 attacks, you suffer disadvantage 3; 3 attacks suffers disadvantage 6)."
    },
    "method": "level"
  },
  "Multi-Bane Specialist": {
    "tier": {
      "1": "You are able to inflict both banes with a single attack. The combined power level of each bane must not exceed the attribute score. If the banes target different defenses, you choose which defense your attack targets. On a successful attack roll, the target is inflicted with both banes. They each persist independently of one another and must be resisted separately."
    },
    "select": "bane",
    "method": "choose"
  },
  "Multi-Target Attack Specialist": {
    "tier": {
      "1": "Reduce the disadvantage penalty associated with multi-targeting by 1.",
      "2": "Reduce the disadvantage penalty associated with multi-targeting by 2.",
      "3": "Reduce the disadvantage penalty associated with multi-targeting by 3.",
      "4": "Reduce the disadvantage penalty associated with multi-targeting by 4.",
      "5": "Reduce the disadvantage penalty associated with multi-targeting by 5."
    },
    "select": [
      "melee",
      "projectile",
      "area"
    ],
    "method": "level",
    "effect": "damaging attack"
  },
  "Potent Bane": {
    "tier": {
      "1": "When a target makes a resist roll to shake off your invocation of the chosen bane, they have disadvantage 1."
    },
    "select": "bane",
    "method": "choose"
  },
  "Resilient": {
    "tier": {
      "1": "Any time you make a resist roll, you have advantage 1 on the roll."
    },
    "method": "choose"
  },
  "Skill Specialization": {
    "tier": {
      "1": "With the chosen attribute, gain advantage 1 on non-attack, non-invocation rolls.",
      "2": "With the chosen attribute, gain advantage 2 on non-attack, non-invocation rolls.",
      "3": "With the chosen attribute, gain advantage 3 on non-attack, non-invocation rolls.",
      "4": "With the chosen attribute, gain advantage 4 on non-attack, non-invocation rolls.",
      "5": "With the chosen attribute, gain advantage 5 on non-attack, non-invocation rolls.",
      "6": "With the chosen attribute, gain advantage 6 on non-attack, non-invocation rolls.",
      "7": "With the chosen attribute, gain advantage 7 on non-attack, non-invocation rolls.",
      "8": "With the chosen attribute, gain advantage 8 on non-attack, non-invocation rolls.",
      "9": "With the chosen attribute, gain advantage 9 on non-attack, non-invocation rolls."
    },
    "select": "attribute",
    "method": "level"
  },
  "Superior Concentration": {
    "tier": {
      "1": "When you sustain a boon as a minor action, you may sustain 1 additional boon.",
      "2": "When you sustain a boon as a minor action, you may sustain 2 additional boons.",
      "3": "When you sustain a boon as a minor action, you may sustain 3 additional boons."
    },
    "method": "choose"
  }
}