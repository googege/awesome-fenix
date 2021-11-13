(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{509:function(t,e,r){t.exports=r.p+"assets/img/ms.11da6a01.jpg"},510:function(t,e,r){t.exports=r.p+"assets/img/evolution.1e925d7f.png"},680:function(t,e,r){"use strict";r.r(e);var n=r(11),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"治理：理解系统复杂性"}},[t._v("治理：理解系统复杂性")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("治理（Governance）")]),t._v(" "),n("p",[t._v("Ensuring and validating that assets and artifacts within the architecture are acting as expected and maintaining a certain level of quality.")]),t._v(" "),n("p",[t._v("治理就是让产品能够符合预期地稳定运行，并能够持续保持在一定的质量水平上。")]),t._v(" "),n("div",{staticClass:"custom-block right"},[n("p",[t._v("—— "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Gartner",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gartner"),n("OutboundLink")],1),t._v("，"),n("a",{attrs:{href:"https://www.gartner.com/en/documents/1824514/magic-quadrant-for-soa-governance-technologies",target:"_blank",rel:"noopener noreferrer"}},[t._v("Magic Quadrant for SOA Governance"),n("OutboundLink")],1),t._v(", 2007")])])]),t._v(" "),n("p",[t._v("行文至此，本章的字里行间都有意无意地流露出微服务架构是复杂的，反复提醒读者三思后行、慎重决策，却还没有解释过复杂性具体是什么、微服务到底有多么复杂、能不能量化、有没有解决的办法。对于最后这个问题，笔者其实并不能给出具体的能解决复杂性的灵丹妙药，药到病除的仙方在软件研发中估计永远无法求到。这节里，笔者将重点分析前三个问题，正确理解软件的复杂性，日后实际解决问题时方能有的放矢。")]),t._v(" "),n("p",[t._v("软件业的确经常会使用到“"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/SOA_governance",target:"_blank",rel:"noopener noreferrer"}},[t._v("治理"),n("OutboundLink")],1),t._v("”（Governance）这个词，听着高级，用着贴切，譬如系统治理、业务治理、流程治理、服务治理，等等。这个词的确切含义是让产品（系统、业务、流程、服务）能够符合预期地稳定运行，并能够持续保持在一定的质量水平上。该定义把治理具体分解为“正确执行”（让软件符合预期地运行）和“持续保持”（让软件持续保持一定质量水平地运行）两个层次的要求，笔者也会分别从静态与发展两种角度解释治理与复杂性的关系。")]),t._v(" "),n("h2",{attrs:{id:"静态的治理"}},[t._v("静态的治理")]),t._v(" "),n("p",[t._v("要求一个信息系统能够符合预期地运行，这听起来无论如何算不上什么“高标准”。不过，当复杂性高到一定程度的时候，能达到正常运行确实就已经离不开治理。笔者举例类比一下，便于你理解这里面的困难之处：一只存活的蜂王或者蚁后就能够满足一个昆虫族群稳定运行的需要，一位厨艺精湛的饭店老板也能够满足一家小饭馆稳定运行的需要，一个君圣臣贤的统治集团才能满足一个庞大帝国稳定运行的需求。治理好蜂群只要求蜂王活着即可，治理好饭馆要依赖老板个人的高明厨技，到了治理国家社稷就要求皇帝圣明大臣贤良才行，可见族群运作的复杂度越高，治理难度也越高。如果你还是没能将族群与个体的关系跟系统与服务的关系联系起来，那再看看图 16-3，仅凭直观感觉也能体会到，这些著名企业里由成百上千微服务互相调用依赖所构成的系统，能够正常运行并不简单。")]),t._v(" "),n("div",{staticClass:"custom-block center"},[n("p",[n("img",{attrs:{src:r(509),alt:""}}),t._v("\n图 16-3 服务间交互关系（"),n("a",{attrs:{href:"https://cloud-google-drive.blogspot.com/2019/11/adoption-of-cloud-native-architecture.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片来源"),n("OutboundLink")],1),t._v("）")])]),t._v(" "),n("p",[t._v("说服你认可治理国家比治理一群蚂蚁要更复杂应该不太困难，但要去说服两个软件系统各自的拥护者，分辨出哪一个系统更复杂却并不容易。决定复杂度高低的是微服务多少吗？是类或文件的个数吗？是代码行数吗？是团队人员规模吗？答案很模糊，复杂是相当对于人而言的，是一个主观标准，每个人都可以有不同的裁量。基于大型软件都是由开发者们互相协作完成的这个基本出发点，笔者用以下两个心理学概念来解释复杂性的来源，受到较多开发者的认可：")]),t._v(" "),n("ul",[n("li",[t._v("复杂性来自"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cognitive_load",target:"_blank",rel:"noopener noreferrer"}},[t._v("认知负荷"),n("OutboundLink")],1),t._v("（Cognitive Load） ：在软件研发中表现为人接受业务、概念、模型、设计、接口、代码等信息所带来的负担大小。系统中个体的认知负担越大，系统就越复杂，这点解释了为什么蚂蚁族群和国家的人口可能一样多，但治理国家比治理一群蚂蚁要更复杂。")]),t._v(" "),n("li",[t._v("复杂性来自"),n("a",{attrs:{href:"http://pss.sagepub.com/content/23/3/219.full.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("协作成本"),n("OutboundLink")],1),t._v("（Collaboration Cost）：在软件研发中表现为团队共同研发时付出的沟通、管理成本高低。系统个体间协作的成本越高，系统就越复杂，这点解释了为什么小饭馆和国家的构成个体都同样是人类，但治理国家比治理一家饭馆要更复杂。")])]),t._v(" "),n("p",[t._v("根据这两个概念，我们可以进一步量化地推导出前文中已经使用过的一个结论："),n("strong",[t._v("软件规模小时微服务的复杂度高于单体系统，规模大时则相反")]),t._v("。这里的原因就是微服务的认知负荷较高，但是协作成本较低。")]),t._v(" "),n("p",[t._v("软件研发的协作成本，本质上是来自协作的沟通复杂度。前一节的讨论微服务粒度时已经使用过 Fred Brooks 的沟通成本的公式：沟通成本=n×(n-1)/2，这是一种随着规模增长呈平方级增长的复杂度，借用"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Time_complexity",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法复杂度"),n("OutboundLink")],1),t._v("的表示方法那就是 O(N"),n("sup",[t._v("2")]),t._v(")。在微服务架构下，组织的拆分与产品的拆分对齐（康威定律），微服务系统的交互分为了服务内部的进程内调用和服务之间的网络调用，组织的沟通也被拆分为团队内部的沟通与团队之间的协作，这种分治措施有利于控制沟通成本的增长速度，此时沟通成本的复杂度，就能缩减至经典分治算法的时间复杂度，即 O(NlogN)。")]),t._v(" "),n("p",[t._v("软件研发的认知负荷，本质上是来自技术的认知复杂度。每次技术进步都伴随着新知识、新概念的诞生，说技术进步会伴随复杂度升级也无不可。只是微服务或者说分布式系统所提倡许多理念，都选择偏向于机器而不是人，有意无意地加剧了该现象。举个具体例子，心理学研究告诉我们，与现实世界不符合的模型会带来更高的认知负荷，因此面向对象编程（OOP）这种以人类观察世界的视角去抽象系统的设计方式是利于降低认知负荷的，但分布式系统提倡面向资源编程（服务间交互是 REST，服务内部并不反对你使用 OOP），服务之间的交互绝不提倡面向对象来进行，Martin Fowler 曾经撰文《"),n("a",{attrs:{href:"https://martinfowler.com/articles/distributed-objects-microservices.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microservices and the First Law of Distributed Objects"),n("OutboundLink")],1),t._v("》强调分布式的第一原则就是不要分发对象（Don't Distribute Your Objects）。微服务加剧认知负荷还体现在很多其他方面，如异步通信（异步比同步更难理解）、粗粒度服务接口（粗粒度 API 比细粒度 API 更难使用，关于这点在 Martin Fowler 的原文中也有详细的解释）、容错处理（服务容错比异常更为复杂）、去中心化（尽管中心化设计会降低可用性，但确实比非中心化有更高的可管理性）等等。该结果并不让人感到意外，在"),n("RouterLink",{attrs:{to:"/architecture/architect-history/primitive-distribution.html"}},[t._v("原始分布式时代")]),t._v("中笔者就提到过，分布式系统早已放弃了 UNIX 所追求的简单性是系统第一属性的设计哲学。")],1),t._v(" "),n("p",[t._v("由于认知负荷是与概念、模型、业务、代码的规模呈正比关系，这些工作都是由人来做的，最终都能被某种比例系数放大之后反应到人员规模上，可以认为认知负荷的复杂度是 O(k×N)（为便于讲解，这里复杂度刻意写成未除消系数的形式），单体与微服务的差别是复杂度比例系数 k 的大小差别，微服务架构的 k 要比单体架构的 k 更大。软件研发的整体复杂度是认知负荷与协作成本两者之和，对于单体架构是 O(k×N)+O(N"),n("sup",[t._v("2")]),t._v(")，对于微服务架构，整体复杂度就是 O(k×N)+O(NlogN)，由于高次项的差异，N 的规模增加时单体架构的复杂度增长更快，这就定量地论证了“软件规模小时微服务的复杂度高于单体系统，规模大时则相反”的观点。")]),t._v(" "),n("p",[t._v("笔者用了千余字的篇幅，目的不是为了证明这个观点的正确，很多架构师仅凭经验也能直观感受出它是正确的。笔者的目的是想解释清楚软件研发的复杂性的来源与差距程度，并说明微服务中分治思想对控制软件研发复杂性的价值。假如只能用一个词来形容微服务解决问题的核心思想，笔者给的答案就是“分治”，这即是微服务的基本特征，也是微服务应对复杂性的手段。")]),t._v(" "),n("h2",{attrs:{id:"发展的治理"}},[t._v("发展的治理")]),t._v(" "),n("p",[t._v("我们再来看治理对动态发展方面的要求，它指采取某些措施，让软件系统能够持续保持一定的质量。“持续保持”听起来只是守成，应该至少不比建设困难。可是一个令人感到意外的结论是此目标其实不可能实现，如果软件系统长期接受新的需求输入，它的质量必然无法长期保持。软件研发中有一个概念“"),n("a",{attrs:{href:"https://link.springer.com/chapter/10.1007/978-3-642-10619-4_15",target:"_blank",rel:"noopener noreferrer"}},[t._v("架构腐化"),n("OutboundLink")],1),t._v("”（Architectural Decay）专门形容此现象：架构腐化只能延缓，无法避免。")]),t._v(" "),n("p",[t._v("架构腐化与生物的衰老过程很像，原因都来自于随时间发生的微妙变化，如果你曾经参与过多个项目或产品的研发，应该能对以下场景有所共鸣：项目在开始的时候，团队会花很多时间去决策该选择用什么技术体系、哪种架构、怎样的平台框架、甚至具体到开发、测试和持续集成工具。此时就像小孩子们在选择自己所钟爱的玩具，笔者相信无论决策的结果如何，团队都会欣然选择他们所选择的，并且坚信他们的选择是正确的。事实也确实如此，团队选择的解决方案通常能够解决技术选型时就能预料到的那部分困难。但真正困难的地方在于，随着时间的流逝，团队对该项目质量的持续保持能力会逐渐下降，一方面是高级技术专家不可能持续参与软件稳定之后的迭代过程，反过来，如果持续绑定在同一个达到稳定之后的项目上，也很难培养出技术专家。老人的退出新人的加入使得团队总是需要理解旧代码的同时完成新功能，技术专家偶尔来评审一下或救一救火，充其量只能算临时抱佛脚；另一方面是代码会逐渐失控，时间长了一定会有某些并不适合放进最初设计中的需求出现，工期紧任务重业务复杂代码不熟悉都会成为欠下一笔技术债的妥协理由，原则底线每一次被细微地突破，都可能被"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Broken_windows_theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("破窗效应"),n("OutboundLink")],1),t._v("撕裂放大成触目惊心的血痕，最终累积到每个新人到来就马上能嗅出老朽腐臭味道的程度。")]),t._v(" "),n("p",[t._v("架构腐化是软件动态发展中出现的问题，任何静态的治理方案都只能延缓，不能根治，必须在发展中才能寻找到彻底解决的办法。治理架构腐化唯一有效的办法是演进式的设计，这点与生物族群的延续也很像，户枢不蠹，也只有流水，才能不腐。")]),t._v(" "),n("p",[t._v("演进式设计这个词语此前的文章中已经提到过多次，它是微服务中提倡的主要特征之一，也是作为技术决策者的架构师应该具备的发展式思维。架构师（Architect）一词是软件行业从建筑行业引进的舶来词，Arch 本身就是拱形建筑的含义。有很多资料都把软件架构师类比解释为给建筑设计骨架、绘制图纸的建筑架构师，这里面其实潜藏着极大的误导。一个复杂的软件与一栋复杂的建筑看似有可比性，两者的演进过程却截然不同。万丈高楼也是根据预先设计好的完整详尽图纸准确施工而建成的，但是任何一个大型的软件系统都绝不可能这样建造出来。演进式设计与建筑设计的关键区别是，它不像是“造房子”，更像是“换房子”。举个具体的例子你就能明白：")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("在校求学的你住着六人间宿舍；")]),t._v(" "),n("li",[t._v("初入职场的你搬进了单间出租屋；")]),t._v(" "),n("li",[t._v("新婚燕尔的你买下属于自己的两室一厅；")]),t._v(" "),n("li",[t._v("孩子上学时，你换上了大户型的学区房；")]),t._v(" "),n("li",[t._v("孩子离家读书时，你也终于走上人生巅峰，换了一套梦想中的大别墅。")])])]),t._v(" "),n("p",[t._v("对于你住进大别墅的这个过程，后一套房子并不是前一套房子的“升级版本”，两套房子之间只有逻辑意义上继承关系，没有实质血源上的继承关系，你最后的大别墅绝对不是在最初的六人间宿舍基础上添砖加瓦扩建而来的。同理，大型软件的建设是一个不断推倒从来的演进过程，前一个版本对后一个版本的价值在于它满足了这个阶段用户的需要，让团队成功适应了这个阶段的复杂度，可以向下一个台阶迈进。对于最终用户来说，一个能在演进过程中逐步为用户提供价值的系统，体验也要远好于一个憋大招的系统——哪怕这大招最终能成功憋出来，这个道理就如下图这幅关于理想交通工具的漫画所示。")]),t._v(" "),n("div",{staticClass:"custom-block center"},[n("p",[n("img",{attrs:{src:r(510),alt:""}}),t._v("\n图 16-4 理想交通工具（"),n("a",{attrs:{href:"https://m.dotdev.co/the-agile-bicycle-829a83b18e7",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片来源"),n("OutboundLink")],1),t._v("）")])]),t._v(" "),n("div",{staticClass:"quote"},[n("p",{staticClass:"title"},[t._v("额外知识：演进式设计")]),n("p",[t._v("演进式设计是 ThoughtWorks 提出的架构方法，无论是代际的演进还是渐进的演进，都带有不少争议，它不仅是建造的学问，也是破坏的学问。Neal Ford 撰写的《"),n("a",{attrs:{href:"https://book.douban.com/subject/34793521/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Building Evolutionary Architectures: Support Constant Change"),n("OutboundLink")],1),t._v("》一书比较详细地阐述了演进式架构的思想，受到不少关注，却不见得其中所有观点都能得到广泛认可。如果你是管理者，大概很难接受正是那些正常工作的系统带来了研发效率的下降；如果你是程序员，估计不一定能接受代码复用性越高、可用性越低这样与之前认知相悖的结论。")])]),n("p",[t._v("笔者强调的演进式设计，不应被过度解读成系统最终都是会腐化，项目最终是要被推倒重建的，针对特定阶段的努力就没有什么作用。静态的治理措施当然有它的价值，我们无法避免架构腐化，却完全有必要依靠良好的设计和治理，为项目的质量维持一段合理的“保质期”，让它在合理的生命周期中发挥价值。")]),t._v(" "),n("p",[t._v("复杂性本身不是洪水猛兽，无法处理的复杂性才是。刀耕火种的封建时代无法想像机器大生产中的复杂协作，蒸汽革命时代同样难以想像数字化社会中信息的复杂流动。先进的生产力都伴随着更高的复杂性，需要有与生产力符合的生产关系来匹配，敏锐地捕捉到生产力的变化，随时调整生产关系，这才是架构师治理复杂性的终极方法。")])])}),[],!1,null,null,null);e.default=o.exports}}]);