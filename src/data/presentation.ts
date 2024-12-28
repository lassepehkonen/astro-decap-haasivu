type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "",
  title: "",
  description:
    "",
  socials: [
    {
      label: "",
      link: "",
    },
  ],
};

export default presentation;
