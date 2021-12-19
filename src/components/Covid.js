import React from "react";
import "../styles/Covid.css";

function Covid() {
  return (
    <div className="container">
      <div className="text">
        The COVID-19 pandemic, also known as the coronavirus pandemic, is an
        ongoing global pandemic of coronavirus disease 2019 (COVID-19) caused by
        severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The novel
        virus was first identified in the Chinese city of Wuhan in December
        2019; a lockdown there and in other cities in surrounding Hubei failed
        to contain the outbreak. The World Health Organization (WHO) declared a
        Public Health Emergency of International Concern on 30 January 2020, and
        a pandemic on 11 March 2020. Multiple variants of the virus emerged, led
        by the Alpha, Beta, Gamma, Delta and Omicron variants. As of 19 December
        2021, more than 274 million cases and 5.35 million deaths have been
        confirmed, making the pandemic one of the deadliest in history.
      </div>
      <div className="link_to_who">
        For more information &nbsp;
        <a
          href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
          target="_blank"
          className="exact_link"
        >
          click here.
        </a>
      </div>
    </div>
  );
}

export default Covid;
