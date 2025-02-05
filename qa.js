const answers = [
  "Ans: The United Nations' first human rights declaration is the mobilization for economic and social rights.",
  "Ans: Every year on December 10th, Human Rights Day is honored.",
  "Ans: The purpose of the Universal Declaration of Human Rights is to present a list of the most basic entitlements or key values that humans deserve simply for being human. These include fairness, dignity, equality, and respect. Furthermore, its goal is to establish the 'basis of freedom, justice, and peace throughout the globe.'",
  "Ans: The two major stages in writing the history of human rights in connection to the history of political economy are:\ni.After WWII, the heroic period of national welfare.\nii.In 1948, the bitter adversaries of the emerging cold war era.",
  "Ans: The following facts have been overlooked in Roosevelt's proposal for a 'second Bill of Rights':\ni.For starters, it marked a typically provincial America's late and tentative admission into an already predetermined North Atlantic consensus.\nii.Second, his most important pledge was the elimination of 'special privileges for the few' - a ceiling on inequality - rather than a floor of protection for the majority.\niii.Finally, Roosevelt thought it would span the globe, but it was structured on a national rather than international scale.",
  "Ans: According to Herodotus' History, global socioeconomic justice, like local socioeconomic justice, would necessitate redistribution under pressure from the rich to the poor through fresh kinds of legal activity.",
  "Ans: The Universal Declaration of Human Rights is significant to me because it works for all human beings' rights, justice, equality, and equity by eliminating partiality, injustice, inequality, discrimination, and so on from society.",
  "Ans: The essay 'Human Rights and the Age of Inequality' does not provide particular methods for stigmatizing inequality, but it does discuss the stigmatization of inequality. Most importantly, history reveals that they are the wrong kind of agent; they are not afraid enough to cause redistribution. If inequality continues to develop at this rate, opponents will emerge at some point. As a result, it is preferable to maintain social equality and fairness. Social equality and liberty can be justified by developing a new type of human rights movement for the sake of the common people. Proper supervision and monitoring, stakeholder support, adopting tough legislation, removing partiality, and maintaining fairness and equality, among other things, are required for the humanitarian benefit of all human beings. Inequality is viewed as a social disgrace since it causes squabbles and conflicts among people, hence a proper balance is essential.",
  "Ans: Yes, another human rights movement is required, according to the essayist, because Human Rights is operating under political suppression in human affairs. He hopes to see another human rights revolution in the near future for the following reasons:\n1.People in positions of power have been caught breaking the law.\n2.Human affairs have contained inequality.\n3.Favoritism and nepotism are still prevalent.\n4.The rule of law will be given primary attention.\n5.Political and social predominance persists throughout the world.\n6.Laws and rights are just documented; they are not implemented.\n7.There is a need for rights and fairness for all people, whether they are rich or poor, who belong to the upper or lower classes.",
  "Ans: Human rights are the fundamental freedoms and rights that every person is entitled to. Treaties and other international agreements often contain clauses that give human rights legal force.\n\nIn Nepal, the Human Rights Commission Act of 1997 (2053 BS) led to the establishment of human rights as a legislative organization in the year 2000. The NHRC became a constitutional body under Nepal's interim constitution of 2007 (2063 BS).\nFollowing are the key obstacles to upholding human rights in Nepal:\n1.Penury/ Poverty (especially in rural regions)\n2.Inequality in education\n3.Gender disparity\n4.Health problems\n5.Children's rights abuses\n6.Abuse of authority\n7.Nepotism, bribery, corruption, illiteracy, and general populace ignorance\n8.Giving personal gains or favors precedence\n9.Inadequate systems for organizing policies Inadequate plans for carrying out legal requirements, etc.",
];

const toggleSwitchQ = document.getElementById("toggleTooltipQ");
// Function to create tooltip dynamically
function createTooltipQ(element) {
  const id = element.id;
  const index = parseInt(id.replace("q", "")); // Extract number from ID (e.g., 'p00' -> 0)
  const tooltipText = answers[index]; // Get tooltip text from the array based on the index
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip-box");
  tooltip.innerText = tooltipText;
  document.body.appendChild(tooltip);

  element.addEventListener("mouseenter", function (event) {
    if (toggleSwitchQ.checked) {
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
      tooltip.style.transform = "scale(1)";
      element.classList.add("highlight"); // Add highlight class when tooltip is shown
      updateTooltipPositionQ(event, tooltip);
    }
  });

  element.addEventListener("mousemove", function (event) {
    if (toggleSwitchQ.checked) {
      updateTooltipPositionQ(event, tooltip);
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
function updateTooltipPositionQ(event, tooltip) {
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
const elementsQ = document.querySelectorAll(".tooltip-containerQ");
elementsQ.forEach(createTooltipQ);

// Keyboard Toggle (Press 'S' to toggle the tooltip switch)
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "s") {
    toggleSwitchQ.checked = !toggleSwitchQ.checked; // Toggle checkbox state
  }
});
