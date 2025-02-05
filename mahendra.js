const summaries = [
  "In this parable, imagine a modern-day Croesus who, like the ancient king, is immensely wealthy and powerful. However, unlike the ancient Croesus, this modern version is not solely self-centered. He ensures that everyone within his vast realm has basic protections against destitution, providing essential needs like health care, food, water, and even leisure. His generosity, while stemming from his immense wealth, reflects his desire to prevent complete poverty, not just to sustain his estate.",
  "The modern world, where many still lack basic benefits, contrasts sharply with the utopia Croesus provides in the parable. This utopia echoes the goals outlined in the Universal Declaration of Human Rights (1948), which aimed to establish basic entitlements for all people simply because they are human. Over the past fifty years, this vision has become a reality, largely through the international human rights movement, which is now focused on advocating for the economic and social rights originally promised in the Declaration.",
  "We are increasingly living in Croesus’s world, where basic civil liberties are respected by enlightened regimes, though the struggle for them continues. Croesus not only detests repression but also abhors socio-economic destitution, viewing it as outrageous even in his position at the top. His commitment to social rights is strong, as he believes it’s essential to ensure no one lives in poverty. His generosity, paired with his immense wealth, is unparalleled, making it hard to downplay the significance of what he provides.",
  "The value of distributive equality, or limiting the wealth gap between the rich and poor, is absent from the Universal Declaration of Human Rights and the legal systems and movements built around it. While the Declaration asserts status equality, claiming all humans are born free and equal in dignity and rights, it doesn’t address wealth inequality. Although the recognition of status equality was revolutionary in a world marred by racism and genocide, it still allows for a world like Croesus’s, where wealth is concentrated at the top, as long as a basic level of protection is provided to the rest.",
  "Croesus’s provision of basic protections seems morally flawed when combined with extreme inequality. This thought experiment highlights that human rights, even when fully realized, can coexist with significant inequality. It's possible to live in a world of extreme hierarchy, like Croesus’s, while still adhering to human rights norms as they are currently formulated. The real question is whether we should continue to idealize such a world as our society increasingly resembles it.",
  "The history of human rights in relation to political economy can be divided into two main stages, with a possible missed opportunity in between. The first stage was the post-World War II era, marked by the rise of national welfare states. During this period, human rights were part of a broader welfarist consensus, with capitalist and communist nations agreeing on the importance of socio-economic rights. While the U.S. did not fully embrace welfarism as much as European nations, the general consensus in the West supported not only a basic floor of protection but also a ceiling on inequality, mirroring the achievements of communist nations.",
  "Human rights in the 1940s were seen as a modest first step rather than the ultimate ideal of the good life, and this is why they were often overlooked or rejected. Franklin Roosevelt's call for a second Bill of Rights included socio-economic protections, but it has been misunderstood. His proposal marked America's late entry into a broader North Atlantic consensus, which aimed for more than just a floor of protection. Roosevelt's highest aspiration was not merely to protect the masses but to end special privileges for the few,' effectively aiming for a ceiling on inequality. Furthermore, his vision was to address these issues nationally, not globally, which contrasts with modern human rights and political economy.",
  "In the 1940s, human rights were not just an optional substitute for consensus welfarism but part of a broader national project of reconstruction. Across the globe, welfarism was pursued on a national level, with nations experimenting with their own socio-economic systems. While the Universal Declaration of Human Rights had international origins, it was essentially a template for nations to follow, emphasizing national rather than global efforts. Welfarism had been national since the interwar period, when state-led reconstruction emerged. The debate over the state's role in economic affairs was framed within national boundaries, leading to varied approaches from capitalism to communism, with socialism reduced to the scale of individual nations.",
  "In the 1940s, political economy extended beyond national borders mainly to prevent disaster if states failed in managing their own economies, but not for a global system of protection or equality. Economist Gunnar Myrdal pointed out that the welfare state was inherently nationalistic. The Universal Declaration of Human Rights was thus meant to provide the minimum guarantees for the national welfarist projects within political boundaries, focusing on individual states rather than global efforts for equality or protection.",
  "The campaign against abjection and the demand for equality succeeded mainly within national borders, especially in North Atlantic states, but with notable limitations. The success came with the geographical restriction of human rights norms, which eventually expanded globally, but this globalization seemed to reward the abandonment of local equality.",
  "Even after decolonization, which was not anticipated by the Universal Declaration, the new states largely adopted the national welfarist approach. The critical issue became what would happen afterward, especially given the Global South's struggle to implement national welfarism and the persistent wealth gap between rich and poor nations.",
  "The human rights movement, while effective against political repression and violence, is ill-equipped to address socio-economic inequality due to its individualistic and often anti-state approach. Its tools, mainly criticism of state repression and war relief, do not challenge market fundamentalism. As a result, human rights have failed to provide a viable alternative, leading to a misguided overreliance on them as a universal solution, leaving economic injustice largely unaddressed.",
  "Socio-economic justice requires wealth redistribution, which mere naming and shaming cannot achieve. Historically, inequality was only moderated under extreme pressures, such as the Cold War and totalitarian threats, which forced governments to balance welfare with suppression. Fear-driven reforms, not moral activism, led to economic protections, often at the cost of violence against perceived enemies.",
  "While the human rights movement has effectively criticized repression and violence, it hasn't provided an alternative to the fear-driven forces that led to protection and redistribution. For global welfarism to become a reality, it must be backed by a movement, not just a program. However, it must be distinct from current human rights activism, which has become less effective as inequality grows. This doesn't diminish the importance of past human rights efforts, like those of Amnesty International.",
  "The stigmatization of states and communities failing to protect basic values is valuable, provided it's not politically motivated. However, current human rights movements lack the tools to address inequality, requiring a new political system to moderate it. Human rights advocates are too passive to provoke the necessary redistribution. While a new form of human rights could potentially address these issues, it would need to be radically different, challenging the core activism that has been built over time. Thus, human rights movements must decide whether to reinvent themselves or wait for an eventual opposition to growing inequality.",
];

const toggleSwitch = document.getElementById("toggleTooltip");
// Function to create tooltip dynamically
function createTooltip(element) {
  const id = element.id;
  const index = parseInt(id.replace("p", "")); // Extract number from ID (e.g., 'p00' -> 0)
  const tooltipText = summaries[index]; // Get tooltip text from the array based on the index
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip-box");
  tooltip.innerText = tooltipText;
  document.body.appendChild(tooltip);

  element.addEventListener("mouseenter", function (event) {
    if (toggleSwitch.checked) {
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
      tooltip.style.transform = "scale(1)";
      element.classList.add("highlight"); // Add highlight class when tooltip is shown
      updateTooltipPosition(event, tooltip);
    }
  });

  element.addEventListener("mousemove", function (event) {
    if (toggleSwitch.checked) {
      updateTooltipPosition(event, tooltip);
    }
  });

  element.addEventListener("mouseleave", function () {
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
    tooltip.style.transform = "scale(0.9)";
    element.classList.remove("highlight"); // Remove highlight when tooltip is hidden
  });
}

// Function to update tooltip position dynamically
function updateTooltipPosition(event, tooltip) {
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  let x = event.clientX;
  let y = event.clientY - tooltipHeight - 15; // Default position above the cursor

  // Prevent the tooltip from going above the screen
  if (y < 10) {
    y = event.clientY + 15; // Position it below the cursor if no space above
  }

  // Prevent tooltip from going out of the right side of the screen
  if (x + tooltipWidth > screenWidth) {
    x = screenWidth - tooltipWidth - 10; // Adjust to stay within screen bounds
  }

  // Prevent tooltip from going out of the left side of the screen
  if (x < 10) {
    x = 10;
  }

  // Prevent tooltip from going out of the bottom side of the screen
  if (y + tooltipHeight > screenHeight) {
    y = screenHeight - tooltipHeight - 10; // Adjust position to stay within bounds
  }

  tooltip.style.top = `${y}px`;
  tooltip.style.left = `${x}px`;

  // Resize tooltip if it goes beyond the right side
  if (x + tooltipWidth > screenWidth) {
    tooltip.style.maxWidth = `${screenWidth - x - 20}px`; // Adjust the width to fit
  }
}

// Create tooltips for all tooltip-triggering elements
const elements = document.querySelectorAll(".tooltip-container");
elements.forEach(createTooltip);

// Keyboard Toggle (Press 'T' to toggle the tooltip switch)
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "t") {
    toggleSwitch.checked = !toggleSwitch.checked; // Toggle checkbox state
  }
});
