// Attributes
var attributes = {"agility":9,"fortitude":9,"might":9,"learning":9,"logic":9,"perception":9,"will":9,"deception":9,"persuasion":9,"presence":9,"alteration":9,"creation":9,"energy":9,"entropy":9,"influence":9,"movement":9,"prescience":9,"protection":9}

var physical = {"agility":9,"fortitude":9,"might":9}
var mental = {"learning":9,"logic":9,"perception":9}
var social = {"will":9,"deception":9,"persuasion":9,"presence":9}
var extraordinary = {"alteration":9,"creation":9,"energy":9,"entropy":9,"influence":9,"movement":9,"prescience":9,"protection":9}

// Feats that are prerequisites for other feats
var prefeats = {"Battlefield Defender":"Battlefield Defender","Berserker":"Berserker","Boon Focus":"Boon Focus","Combat Momentum":"Combat Momentum","Defensive Reflexes II":"Defensive Reflexes II","Hallucination":"Hallucination","Knowledge I":"Knowledge I","Lethal Strike I":"Lethal Strike I","Multi-Attack Specialist":"Multi-Attack Specialist","Multi-Target Boon Specialist II":"Multi-Target Boon Specialist II","Overpowering Strike":"Overpowering Strike"}

// Perks & Flaws
var perks = {"Arcane Bloodline":"Your ancestry can be traced to dragons, fey, or a similarly magical race. As such, you command the respect of those who practice the arcane arts. You are assumed to have knowledge and a destiny for greatness in the ways of magic, and others treat you with deference. This influence could guarantee your placement within an Arcane College, grant you an apprenticeship with a famous Archmage, or cause a magic-user who does not know you well to follow a prescribed course of action based on your advice if the question is one of Arcane knowledge.","Artisan":"Choose a specific craft, such as weapon smithing, glass blowing, or brewing. You know the ins and outs of crafting goods of the highest quality within your chosen specialty. As a master craftsman, you are able to create items of exceptional value given the necessary time and materials. Furthermore, whenever you are performing a task in which your crafting skills would play a role, you gain advantage 1 to any action rolls that you must make.","Ascetic":"You are well-versed in the art of living with less. Whether a cloistered monk or a wizened sage who spent years locked away in a tower of books, you are experienced at going long stretches of time with very little food, water, or company - and as such, these situations tend not to affect you as they do others. You are hardened against physical and mental deprivation and have developed an enviable degree of self-mastery.","Attractive":"You are just really darn good looking. This plays to your favor more than just romantically, and your good looks tend to help you out in all sorts of social situations. Whenever your attractiveness would play a role in a situation, you gain advantage 1 to any relevant action rolls.","Brute":"While others might convince with a silver tongue, you speak the universal language of fear. Once per game session, if you make a show of physical force, you can use your <em>Might</em> attribute for a <em>Persuasion</em> roll. If your <em>Persuasion</em> score is already equal to or greater than your <em>Might</em> score, you get advantage 1 on the roll.","Courageous":"Your heart is brave beyond bounds. Once per game session, as a free action you can cancel all negative effects upon you related to fear or low morale.","Crowd Favorite":"Whether you are an actor, musician, storyteller, magician, or some other type of performer, the common folk love your work. They adore you for your ability to use your art to transport them to a world beyond their daily drudgery, and you can always find a place to perform and make money at the local tavern or inn.","Divine Agent":"You serve a higher being and have earned their protection. Once per game session, when you are subject to a <em>Finishing Blow</em> while your hit points are below 1, you automatically heal to a hit point total of 1.","Divine Insight":"You possess a supernatural connection to a deity, demi-god, or other divine being which grants you otherworldly insight. Once per game session, you can choose a topic relevant to the story. The GM shares some information about that topic which might be useful. If you�ve just failed a <em>Learning</em> attribute roll and use this ability, the GM decides whether to give you information related to that roll or to give you knowledge that is completely unrelated.","Ear of the Emperor":"You have done something in the past to earn the favor of someone in a high place: a senator, the general of an army, a merchant lord, etc. Perhaps you saved their life or spared them from significant monetary loss. Whatever you did, they owe you, and they are willing to help you with minor favors as long as the favors do not subject them to any risk or cost. Once during the campaign, you can call in a large favor that does put your contact in risk or cost them something significant. They will perform the favor, but you immediately lose this trait, as their debt has been repaid.","Idol":"Your reputation for some outstanding virtue precedes you, and people tend to hold you in high esteem. Once per session, you can call upon your reputation to inspire trust from someone who is skeptical of you, your actions, or your allies.","Innocent":"Whether from a distant fey ancestry or simply an air of naivety, you possess a childlike quality that can melt even the coldest of hearts. Once per game session, you can leverage your innocence to turn an enemy and cause them to take pity on you. The enemy might choose to look the other way when you�ve done something illegal, forgive a debt you could never pay, or vouch in your favor before the authorities.","Jack of All Trades":"You have a knack for picking up new skills. Once per game session, provided you are not under pressure from an inordinately tight deadline, you can automatically succeed at a non-attack action roll that relates to some craft, trade, skill, or similar work provided its Challenge Rating is less than or equal to 14.","Local Hero":"You are well-known and respected as a protector of the common folk in a small region. The commoners look up to you, and will offer you food, shelter, and other necessities. They will even take risks or assume minor costs to aid or protect you, so long as the risk is not death.","Lucky":"Once per game session, in a moment of need, you can call on luck shine to upon you. The GM decides what form this luck takes. For example, an attack that was meant for you might target an ally instead, you may discover a secret passage to escape from a rolling boulder, or a town guardsman decides to overlook your crime because you happen to have grown up on the same street.","Merchant":"You know the art of economics as well as the best of businessmen. A master of supply and demand, you have a knack for knowing when to buy and when to sell. You cannot be swindled when it comes to bartering, and you always know whether or not you are getting a fair price. Furthermore, you have friends in merchant circles and guilds in your home city, and you can easily gain them in new locations.","Noble":"Being of high birth, you are treated as a benefactor by the lower classes. They will trust and help you in the hopes of being rewarded for their efforts. You are also treated as a peer by lesser nobles and can typically request an audience with them. In addition, representatives of the law generally assume you to be beyond reproach unless they are presented with compelling evidence to the contrary.","Observant":"Your keen senses allow you to notice details that others typically miss. Once per game session, you can use this ability to notice something out of the ordinary. For example, you might spot a hidden passage behind a bookcase, a trace of blood under the fingernails of another character, or a wig that is not quite convincing. If you use this ability after failing a <em>Perception</em> roll, the GM decides whether you notice the initial target of your roll or a different detail.","Outlaw":"You are part of a criminal network, whether it be a thieves� guild, band of smugglers, or otherwise. Once per game session, you can call in a favor from a contact within your network to perform a mundane task such as gathering information or arranging safe passage. If the favor puts your contact at risk, they will still perform it but may ask for an equally risky favor from you in return.","Profession":"Choose a specific trade, such as sailor, soldier, or miner. You know everything there is to know about the business and are a master of the requisite skills. A sailor, for example, can tie a knot for all occasions, navigate by the stars, and man any station aboard a ship. A soldier is well-versed in a variety of arms, understands military tactics, and knows how to navigate the chain of command with ease. Furthermore, whenever you are performing a task in which your professional skills would play a role, you gain advantage 1 to any action rolls that you must make.","Pure-hearted":"Any goodly-natured creature you encounter is friendly toward you by default rather than neutral. Circumstances can alter this, but even if rumors or actions you�ve taken would influence a good creature negatively, it remains one step friendlier than it otherwise would have been.","Resilient":"Once per game session, you can automatically succeed a Fortitude action roll of Challenge Rating less than or equal to 10 + twice your Fortitude score.","Scavenger":"You have lived a life of need, and thus know how to make do when others would go without. Once per game session, you can easily acquire a single mundane item even though it would otherwise take time to get or be completely unattainable. Depending on the circumstances, the GM may decide that your acquisition is only temporary or subject to reasonable conditions. For example, you might use this perk to acquire a rope in the middle of a desert, but the GM may rule that it is so sun-baked and ancient that it will likely snap after a few uses.","Scent":"Your sense of smell is similar to that of a wild beast. As a focus action, you can discern the number and relative location of living creatures within 60�. With an additional focus action you can lock onto a particular scent and maintain its relative location as long as it remains within 60�. Furthermore, you gain advantage 1 on attempts to track a creature if it has left a scent trail.","Scholar":"You have spent years studying a particular discipline, such as science, herbalism, dragon lore, history, politics, or religion. Once per session, you can re-roll a failed <em>Learning</em> check related to your discipline, gaining advantage 2 on the re-roll. Furthermore, you have colleagues and connections within your discipline, and know the proper channels for gaining access to specialty laboratories, libraries, temples, or other collections of lore related to your field of scholarship.","Silver Tongue":"You have practiced the ways of sneaking hidden charms and subliminal messages within everyday conversation. Once per session, when you converse with an intelligent creature for at least five minutes, you will learn one useful secret of the GM�s choosing about the creature.","Stone Sense":"While underground you may fail to find what you�re looking for, but you can never be truly lost. You can always find your way back to the entrance through which you entered. Furthermore, you have advantage 1 on any action rolls in which a familiarity with underground environments would prove helpful, such as attempts to identify the risk of a cave in or to find a secret passage within a cavern.","Street Rat":"You were raised on the streets or at least spent a good deal of time crawling about them. As such, you know how to navigate urban areas quickly, make yourself unseen, and find a bite to eat when you�re down on your luck. As one of the invisible urchins that crawl the city, you are also quite adept at picking up rumors in taverns and crowded streets.","Supernatural Presence":"Your inherent supernatural nature manifests itself in a tangible way of your choosing. For example, your eyes may glow, your skin might emanate an icy chill, or a trail of withering plants could follow you wherever you tred. Depending on the nature of your supernatural presence, it might make others more likely to fear, admire, or trust you�or otherwise alter their initial perceptions of you. Whenever your supernatural presence is relevant in a social situation, you gain advantage 1 on any action rolls you make.","Sylvan Ally":"Creatures of nature can sense your deep respect for the natural order. Wild animals give you a wide berth, Druids give you the benefit of a doubt by assuming that you do not have destructive intentions, and you can typically gain an audience with the chief of a small local tribe by virtue of your reputation for defending nature.","Vagabond":"Having spent significant time fending for yourself in the wilderness, you excel at surviving and navigating in the wild. You always know the direction of true north and you can automatically find enough food to feed yourself plus a number of additional people equal to your Learning attribute score.","Warrior�s Code":"As a veteran warrior, you command respect even from foes. Once per session, you can use this ability to cause an enemy or group of enemies to extend special concessions or favorable treatment toward you via an unspoken warrior�s code. The GM decides what these concessions look like. For example, your enemies might choose to trust you to come quietly and not shackle you, or overlook an insult that would have otherwise have been cause for bloodshed.","Whisperer of the Wild":"Once per game session, you can ask a single �yes� or �no� question of a plant or animal within earshot. The plant or animal automatically trusts you at least enough to answer the question truthfully. You receive the answer by way of an inner sense, and so this ability cannot be used for further two-way communication."}
var flaws = {"Absent-minded":"Your live with your head in the clouds. You might just be ditzy, or maybe you just spend your time contemplating loftier matters. Whatever the source of your absent-mindedness, you are slow to notice important details and have a tendency to get distracted at exactly the worst possible moment.","Addiction":"The roll of the dice, the smoke of the Black Lotus, or the escape of the virtual reality machine. Whether your addiction is physical, mental, or social, the effect is generally the same: you�ve got an itch that you need to scratch, and you�ll sometimes do reckless or atrocious things to make sure that you can get your fix. You get to decide the nature and severity of your addiction.","Ambitious":"You are willing to do anything to get ahead in life and often that means trampling upon other people on your way to the top. When presented with a situation requiring empathy for those beneath you, it�s typical for you to ignore their need. In addition, you may sometimes overreach in your attempts to get ahead, making bold and risky choices that can put you and those close to you in danger.","Bloodlust":"Battle isn�t just a way of life, it is <em>the</em> way of life. There isn�t a conflict you�ve encountered that wasn�t best solved with steel, and your allies will have a hard time convincing you otherwise. You are prone to starting fights when they aren�t necessary and prolonging them even after the enemy has surrendered.","Brash":"You are bold and daring to the point of recklessness. You have no time for plans, calculations, or strategic thinking. A lot of brass and a peck of luck are all you need. Kick in the door and let the details sort themselves out.","Bravado":"You have a flair for the dramatic, and will often undertake bold or daring maneuvers simply for the thrill of it. For example, in combat you might swing from a chandelier even if it offers no tactical advantage.","Cosmetic Deformity":"Something about you makes you less attractive, undesirable to behold, or even just downright abominable. You get to decide the nature and severity of your deformity. Examples include a scarred cheek, vacant white eyes, a burn-covered body, and a missing nose. Whatever form this flaw takes, it is merely cosmetic and thus will generally only affect you in social situations.","Compulsion":"You have an irresistible urge to perform a behavior of your choice. Examples include, grinding your teeth, tapping your foot, biting your fingernails, counting coinage, and washing your hands. Your compulsion can sometimes put you in awkward or embarrassing situations, such as needing to wash your hands immediately after shaking hands with an ambassador.","Cowardly":"You have honed self-preservation into a way of life, and you will do almost anything to avoid danger, pain, and death. Sometimes, the situation at hand and the pumping of adrenaline will lead you to perform acts that appear courageous, but sooner or later your cowardly nature will emerge. You are easy to intimidate and you will almost assuredly crack under interrogation. In combat, you can still choose to fight, but you will attempt to distance yourself as much as possible from harms way, even if it means leaving an ally in a tough spot.","Dimwitted":"You aren�t the sharpest tack in the box. It�s not just that you weren�t gifted with skill in academia, it�s that you pick up on things pretty slowly overall. With the exception of your areas of expertise, you have a hard time learning new skills, following instructions, and maybe even remembering names.","Disabled":"You have some physical deficiency that holds you back in life. You decide the nature and severity of your disability. Some examples of disabilities include blindness, deafness, missing limbs, partial paralysis, bone deficiencies, or allergies.","Greedy":"You can�t help it: you just like things. Money, gems, items of power - they beckon you at every turn and you�ll often take great risks and maybe even betray your allies if the monetary reward is great enough. You�re easy to bribe, and you will often push the limits of negotiation or bartering in order to increase your share in the profits, even if it makes you a few enemies.","Honest":"You won�t tell a lie or engage in deceitful speech, even to save your own life or the life of another.","Hot Tempered":"Your fuse is short and your explosions are destructive. Sometimes your anger boils slowly over time and other times it erupts completely unexpectedly. But when you do fly off the handle, things rarely go well for you.","Illiterate":"You can�t read or write, even in languages that you speak fluently.","Literal Minded":"You struggle with concepts and turns of phrase that are not literally true, such as idioms and metaphors. You might think sorcery is afoot if someone tells you it is �raining cats and dogs�. If a friend exaggerated by saying �I�d kill myself if Melzak were elected Supreme Justice�, you would be genuinely concerned for your friend�s life if Melzak did get elected.","Mood Disorder":"You suffer from a psychological condition that directly affects your mood, such as depression or anxiety. You get to to determine the nature and severity of your mood disorder.","Naive":"Whether you are innocent, uninformed, or inexperienced, the results are the same: you are pretty gullible. You get to define the scope of your naivety. For example, maybe you�re a greenhorn from a big city on the east coast, so you are unlearned in the ways of the Wild West. Or maybe your memory was completely wiped out a few weeks ago and you are relearning the rules of civilization, thus your naivety presents itself much more universally.","Overt":"You have a strong aversion to subterfuge, legerdemain, and smooth talking. After all, the shortest distance between two points is a straight line, so why not follow the straight and narrow path? Your overtness may lead to you mistakenly foil the plans of allies, such as by blurting out a sensitive truth in the midst of a tense negotiation.","Overweight":"You are carrying a few extra pounds, and they tend to get in the way at all the wrong times, such as when climbing a ladder or crossing a decrepit rope bridge.","Pacifist":"You disdain combat and bloodshed of any kind, and will generally do whatever possible to avoid it. You can decide the extent of your pacifism. You might just revert to violence as a last resort, or you may be so averse to combat that you won�t lift a weapon even in defense of yourself or others.","Phobia":"You are terrified and incapable of rational thought when you are presented with the object of your fear. It could be spiders, snakes, closed spaces, crowds, or something less common like co-dependence, a fear of being alone that causes you to always seek out companionship, even if that companionship has a negative impact on your life overall.","Proud":"Some call it an inflated ego. Others call it conceit. But you know that you really are just that good. The rabble are inferior, and you�re not afraid to let them know. Your pride may be a universal sense of self-worth, or it may only manifest itself within certain spheres or situations. For example, your rank in the Royal Space Marines leads you to look down upon anyone trained in less illustrious armed forces.","Psychotic":"You are severely mentally deranged to the extent that you occasionally lose touch with reality. You get to determine the extent and nature of your psychosis, including any potential triggers. For example, you might believe that beings from another dimension are trying to abduct you, or perhaps you relive a nightmarish scene from your past whenever you are in the midst of a gun fight.","Short-winded":"You have poor lung capacity and easily tire. Sprints, long runs, and forced marches are either impossible for you or they tend to leave you completely incapacitated afterwards.","Sick":"You suffer from some sort of chronic illness or condition, such as tuberculosis, cancer, arthritis, or irritable bowel syndrome. Even if you possess the means to treat your disease or control the symptoms, you might still have episodes or flare ups that hinder your adventuring life.","Socially Awkward":"Something about your behavior tends to rub people the wrong way. Perhaps you don�t respect the personal space of others, you tend to ramble in conversation, or share overly personal details. Whatever the nature of your awkwardness, it makes social situations difficult for you at times.","Stubborn":"It�s your way or the highway. Maybe not all of the time, but once you�ve made your mind up on an important matter, you won�t budge. You probably won�t even compromise.","Uncoordinated":"Your body just doesn�t work well with itself. You have trouble balancing, catching, throwing, and performing similar physical tasks that require dexterity or nimbleness.","Vengeful":"You let no slight go unpunished. While some might be able to shake off an insult from a tavern drunk, you take it as a personal assault that demands satisfaction. The more severe the crime, the greater the vengeance you will mete out.","Zealous":"You stand for a cause - whether it is a religion, a nation, a code, a way of life, or otherwise - and you will push the boundaries of normal behavior to uphold your cause. This might mean that you make yourself a social outcast by attempting to convert others to your cause, or it could mean that you are willing to perform an act you might otherwise consider evil, such as putting innocent lives in danger, if doing so would promote your cause."}

// Weapons
/*  The number represents handedness: 1 handed, 2 handed, or 3 (versatile)*/
var melee = {"Unarmed Strike":1,"Dagger":1,"Longsword":3,"Battle Axe":3,"Spear":2,"Mace":1,"Quarterstaff":2,"Flail":2,"Hatchet":1,"Scimitar":3,"Short Sword":1,"Warhammer":1,"Maul":2,"Glaive":2,"Greataxe":2,"Greatsword":2}
var ranged = {"Crossbow":2,"Hand Crossbow":1,"Longbow":2,"Shortbow":2}
var swift = {"Unarmed Strike":2,"Dagger":2,"Hatchet":1,"Scimitar":1,"Short Sword":1,"Hand Crossbow":1,"Shortbow":1}

// Armor
var armor = {"Leather":{"might":0,"defense":2,"speed":0},"Chain Shirt":{"might":2,"defense":3,"speed":0},"Scale Shirt":{"might":2,"defense":4,"speed":0},"Chainmail":{"might":3,"defense":5,"speed":5},"Scale Mail":{"might":4,"defense":6,"speed":5},"Plate Mail":{"might":5,"defense":7,"speed":10},"Elven Plate Mail":{"might":3,"defense":7,"speed":5}}
var shield = {"Small Shield":{"might":1,"defense":1,"speed":0},"Large Shield":{"might":3,"defense":2,"speed":0}}

/*  These may fall out  of date. I recommend parsing these yourself from the available YML files*/
// Feats broken into each level/cost
var feats = {"Alternate Form I":3,"Alternate Form II":6,"Area Manipulation I":1,"Area Manipulation II":2,"Area Manipulation III":3,"Area Manipulation IV":4,"Area Manipulation V":5,"Armor Mastery I":2,"Armor Mastery II":4,"Armor Mastery III":6,"Attack Redirection":3,"Attack Specialization I":3,"Attack Specialization II":6,"Attack Specialization III":9,"Attack Specialization IV":12,"Attack Specialization V":15,"Attack Specialization VI":18,"Attack Specialization VII":21,"Attack Specialization VIII":24,"Attack Specialization IX":27,"Attribute Substitution":3,"Bane Focus":3,"Battlefield Defender":2,"Battlefield Punisher - Knockdown":3,"Battlefield Punisher - Slowed":3,"Battlefield Punisher - Stunned":3,"Battlefield Sentinel I":2,"Battlefield Sentinel II":4,"Battlefield Sentinel III":6,"Battlefield Sentinel IV":8,"Battlefield Sentinel V":10,"Berserker":3,"Boon Access":1,"Boon Focus I":3,"Boon Focus II":6,"Boon Focus III":9,"Breakfall I":1,"Breakfall II":2,"Breakfall III":3,"Breakfall IV":4,"Breakfall V":5,"Breakfall VI":6,"Breakfall VII":7,"Breakfall VIII":8,"Breakfall IX":9,"Brutal Intimidation":1,"Climbing":2,"Combat Follow-through":2,"Combat Momentum":1,"Companion I":3,"Companion II":6,"Companion III":9,"Craft I":2,"Craft II":4,"Craft Beneficial or Baleful Item I":3,"Craft Beneficial or Baleful Item II":6,"Craft Beneficial or Baleful Item III":9,"Crushing Blow":3,"Death Blow I":3,"Death Blow II":6,"Death Blow III":9,"Deathless Berserker":3,"Defensive Reflexes I":2,"Defensive Reflexes II":4,"Defensive Reflexes III":6,"Defensive Reflexes IV":8,"Defensive Reflexes V":10,"Defensive Reflexes VI":12,"Defensive Reflexes VII":14,"Defensive Reflexes VIII":16,"Defensive Reflexes IX":18,"Defensive Reflexes X":20,"Destructive Berserker":3,"Diehard":2,"Disease Immunity":1,"Energy Resistance I":2,"Energy Resistance II":4,"Energy Resistance III":6,"Energy Resistance IV":8,"Entranced Berserker":3,"Evasive Footwork":2,"Extraordinary Defense I":2,"Extraordinary Defense II":4,"Extraordinary Defense III":6,"Extraordinary Defense IV":8,"Extraordinary Defense V":10,"Extraordinary Focus":3,"Extraordinary Healing":3,"Fast Draw":2,"Fast Tracker":2,"Ferocious Minions":2,"Fleet of Foot I":2,"Fleet of Foot II":4,"Fleet of Foot III":6,"Flying":3,"Great Leap I":1,"Great Leap II":2,"Great Leap III":3,"Hallucination":3,"Hallucination - Mass":3,"Hospitaler":2,"Hunter's Foe I":1,"Hunter's Foe II":2,"Hunter's Foe III":3,"Hunter's Foe IV":4,"Hunter's Foe V":5,"Hunter's Foe VI":6,"Hunter's Foe VII":7,"Hunter's Foe VIII":8,"Hunter's Foe IX":9,"Indomitable Endurance I":2,"Indomitable Endurance II":4,"Indomitable Endurance III":6,"Indomitable Endurance IV":8,"Indomitable Endurance V":10,"Indomitable Endurance VI":12,"Indomitable Endurance VII":14,"Indomitable Endurance VIII":16,"Indomitable Endurance IX":18,"Inspiring Champion I":2,"Inspiring Champion II":4,"Inspiring Champion III":6,"Knowledge I":2,"Knowledge II":4,"Knowledge III":6,"Lethal Strike I":3,"Lethal Strike II":6,"Lethal Strike III":9,"Lethal Strike IV":12,"Lethal Strike V":15,"Lethal Strike VI":18,"Lethal Strike VII":21,"Lethal Strike VIII":24,"Lethal Strike IX":27,"Lightning Reflexes I":1,"Lightning Reflexes II":2,"Lightning Reflexes III":3,"Lightning Reflexes IV":4,"Lightning Reflexes V":5,"Marksman I":1,"Marksman II":2,"Marksman III":3,"Martial Focus":3,"Master Tracker":1,"Mimic":2,"Multi-Attack Specialist I":3,"Multi-Attack Specialist II":6,"Multi-Attack Specialist III":9,"Multi-Attack Specialist IV":12,"Multi-Attack Specialist V":15,"Multi-Attack Specialist VI":18,"Multi-Bane Specialist":3,"Multi-Target Attack Specialist I":2,"Multi-Target Attack Specialist II":4,"Multi-Target Attack Specialist III":6,"Multi-Target Attack Specialist IV":8,"Multi-Target Attack Specialist V":10,"Multi-Target Boon Expert":3,"Multi-Target Boon Specialist I":2,"Multi-Target Boon Specialist II":4,"Multi-Target Boon Specialist III":6,"Multi-Target Boon Specialist IV":8,"Multi-Target Boon Specialist V":10,"Natural Defense I":2,"Natural Defense II":4,"Natural Defense III":6,"Overpowering Strike":2,"Potent Bane":3,"Reactionary Berserker":2,"Reckless Frenzy":3,"Resilient":3,"Ritual Magic I":2,"Ritual Magic II":4,"Ritual Magic III":6,"Silencing Strike":3,"Skill Specialization I":2,"Skill Specialization II":4,"Skill Specialization III":6,"Skill Specialization IV":8,"Skill Specialization V":10,"Superior Concentration I":3,"Superior Concentration II":6,"Superior Concentration III":9,"Swimming":1,"Tough as Nails I":2,"Tough as Nails II":4,"Two Weapon Brute":3,"Two Weapon Defense":2,"Unending Charm":3,"Untrackable":1,"Vicious Strike":2,"Wealthy":3,"Well-Rounded":2} 
// Boons broken into each level
var boons = {"Absorb Object":4,"Animation (6)":6,"Animation (8)":8,"Augury (1)":1,"Augury (3)":3,"Augury (5)":5,"Augury (7)":7,"Aura (4)":4,"Aura (6)":6,"Aura (8)":8,"Barrier (3)":3,"Barrier (5)":5,"Barrier (7)":7,"Barrier (9)":9,"Blindsight":5,"Bolster (3)":3,"Bolster (6)":6,"Bolster (8)":8,"Darkness (1)":1,"Darkness (2)":2,"Darkness (3)":3,"Darkness (4)":4,"Darkness (5)":5,"Darkness (6)":6,"Darkness (7)":7,"Darkness (8)":8,"Darkness (9)":9,"Detection":1,"Flight (5)":5,"Flight (6)":6,"Flight (8)":8,"Genesis (3)":3,"Genesis (7)":7,"Genesis (9)":9,"Haste (2)":2,"Haste (4)":4,"Haste (6)":6,"Haste (8)":8,"Heal (1)":1,"Heal (2)":2,"Heal (3)":3,"Heal (4)":4,"Heal (5)":5,"Heal (6)":6,"Heal (7)":7,"Heal (8)":8,"Heal (9)":9,"Insubstantial":7,"Invisible":6,"Life Drain":5,"Light (1)":1,"Light (2)":2,"Light (3)":3,"Light (4)":4,"Light (5)":5,"Light (6)":6,"Light (7)":7,"Light (8)":8,"Light (9)":9,"Reading (5)":5,"Reading (6)":6,"Reading (7)":7,"Reading (8)":8,"Reading (9)":9,"Regeneration (1)":1,"Regeneration (3)":3,"Regeneration (5)":5,"Regeneration (7)":7,"Regeneration (9)":9,"Resistance (3)":3,"Resistance (5)":5,"Resistance (7)":7,"Resistance (9)":9,"Restoration (1)":1,"Restoration (2)":2,"Restoration (3)":3,"Restoration (4)":4,"Restoration (5)":5,"Restoration (6)":6,"Restoration (7)":7,"Restoration (8)":8,"Restoration (9)":9,"Retributive Barrier (4)":4,"Retributive Barrier (5)":5,"Retributive Barrier (6)":6,"Retributive Barrier (7)":7,"Retributive Barrier (8)":8,"Seeing (4)":4,"Seeing (5)":5,"Seeing (6)":6,"Shapeshift (3)":3,"Shapeshift (4)":4,"Shapeshift (5)":5,"Shapeshift (6)":6,"Shapeshift (8)":8,"Shapeshift (9)":9,"Summon Creature (4)":4,"Summon Creature (5)":5,"Summon Creature (6)":6,"Summon Creature (7)":7,"Summon Creature (8)":8,"Summon Creature (9)":9,"Telekinesis (4)":4,"Telekinesis (6)":6,"Telekinesis (8)":8,"Telepathy (3)":3,"Telepathy (5)":5,"Telepathy (6)":6,"Telepathy (7)":7,"Teleport (3)":3,"Teleport (5)":5,"Teleport (7)":7,"Teleport (9)":9,"Tongues (5)":5,"Tongues (6)":6,"Transmutation (3)":3,"Transmutation (5)":5,"Transmutation (7)":7,"Transmutation (8)":8,"Transmutation (9)":9,"Truesight (5)":5,"Truesight (7)":7,"Truesight (9)":9} 
// Banes broken into each level (Surprised removed)
var banes = {"Banished":6,"Blinded":4,"Charmed (3)":3,"Charmed (4)":4,"Charmed (6)":6,"Death":9,"Demoralized (3)":3,"Demoralized (6)":6,"Demoralized (8)":8,"Disarmed (3)":3,"Disarmed (6)":6,"Dispel (1)":1,"Dispel (6)":6,"Dominated (3)":3,"Dominated (5)":5,"Dominated (9)":9,"Fatigued":5,"Fear":5,"Forced Move (2)":2,"Forced Move (4)":4,"Forced Move (6)":6,"Forced Move (8)":8,"Immobile":1,"Incapacitated (5)":5,"Incapacitated (7)":7,"Incapacitated (9)":9,"Knockdown":2,"Memory Alteration (5)":5,"Memory Alteration (6)":6,"Memory Alteration (8)":8,"Mind Dredge (2)":2,"Mind Dredge (4)":4,"Mind Dredge (6)":6,"Mind Dredge (8)":8,"Mind Dredge (9)":9,"Persistent Damage (2)":2,"Persistent Damage (4)":4,"Persistent Damage (6)":6,"Phantasm (1)":1,"Phantasm (2)":2,"Phantasm (3)":3,"Phantasm (6)":6,"Polymorph (5)":5,"Polymorph (6)":6,"Polymorph (8)":8,"Polymorph (9)":9,"Provoked (4)":4,"Provoked (5)":5,"Provoked (6)":6,"Provoked (7)":7,"Provoked (8)":8,"Provoked (9)":9,"Scrying":5,"Sickened":3,"Silenced":2,"Slowed":2,"Stunned":4,"Stupefied":7,"Truthfulness":5} 
