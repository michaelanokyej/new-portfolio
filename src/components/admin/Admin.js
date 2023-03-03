import React, { useState } from "react";
import data from "../../portfolio.json";
import "./Admin.css";

const labelStyle =
  "w-40 text-left mb-0 text-lg font-medium text-gray-900 dark:text-white";
const textInputStyle =
  "bg-gray-50 border border-gray-300 w-2/3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const labelTextInputWrapper = "flex items-center my-2 ";

function AdminPage() {
  const [name, setName] = useState(data.name);
  const [profilePic, setProfilePic] = useState(data.profilePic);
  const [email, setEmail] = useState(data.email);
  const [introText, setIntroText] = useState(data.introText);
  const [phone, setPhone] = useState(data.phone);
  const [qualifications, setQualifications] = useState(data.qualifications);
  const [skills, setSkills] = useState(data.skills);
  const [projects, setProjects] = useState(data.projects);
  const [moreProjects, setMoreProjects] = useState(data.moreProjects);
  const [aboutMe, setAboutMe] = useState(data.aboutMe);
  const [resume, setResume] = useState(data.resume);

  const [saveBtnClicked, setSaveBtnClicked] = useState(false);

  // basic info
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleIntroTextChange = (e) => {
    setIntroText(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // qualification
  const handleAddQualification = () => {
    setQualifications([
      ...qualifications,
      {
        name: "",
        link: "",
      },
    ]);
  };

  const handleQualificationNameChange = (e, index) => {
    const newQualifications = [...qualifications];
    newQualifications[index].name = e.target.value;
    setQualifications(newQualifications);
  };

  const handleQualificationLinkChange = (e, index) => {
    const newQualifications = [...qualifications];
    newQualifications[index].link = e.target.value;
    setQualifications(newQualifications);
  };

  const handleDeleteQualification = (index) => {
    const newQualifications = qualifications.filter((_, i) => i !== index);
    setQualifications(newQualifications);
  };

  // skills
  const handleSkillChange = (index, field, event) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = event.target.value;
    setSkills(updatedSkills);
  };

  const handleSkillItemChange = (index, itemIndex, field, event) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field][itemIndex] = event.target.value;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { category: "", items: [] }]);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleAddSkillItem = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].items.push("");
    setSkills(updatedSkills);
  };

  const handleDeleteSkillItem = (skillIndex, itemIndex) => {
    const updatedSkills = [...skills];
    updatedSkills[skillIndex].items.splice(itemIndex, 1);
    setSkills(updatedSkills);
  };

  // projects
  const handleProjectChange = (setProjects, event, index, field) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = event.target.value;
    setProjects(updatedProjects);
  };

  const handleProjectStackChange = (setProjects, event, index) => {
    const updatedProjects = [...projects];
    const stackIndex = updatedProjects[index].stack.indexOf(event.target.value);
    if (stackIndex === -1) {
      updatedProjects[index].stack.push(event.target.value);
    } else {
      updatedProjects[index].stack.splice(stackIndex, 1);
    }
    setProjects(updatedProjects);
  };

  const handleProjectDelete = (setProjects, index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleAddProject = (setProjects) => {
    const newProject = {
      title: "",
      description: "",
      image: "",
      features: [],
      stack: [],
      liveLink: "",
      codeLink: "",
    };
    setProjects([...projects, newProject]);
  };

  const handleFeatureUpdate = (setProjects, index, featureIndex, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].features[featureIndex] = value;
    setProjects(updatedProjects);
  };

  const handleFeatureDelete = (setProjects, index, featureIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[index].features.splice(featureIndex, 1);
    setProjects(updatedProjects);
  };

  const handleFeatureAdd = (setProjects, index, value) => {
    const updatedProjects = [...projects];

    if (!updatedProjects[index].features) {
      updatedProjects[index].features = [];
    }
    updatedProjects[index].features.push(value);
    setProjects(updatedProjects);
  };

  // about
  const handleTitleChange = (event) => {
    setAboutMe({ ...aboutMe, title: event.target.value });
  };

  const handleQuoteChange = (event) => {
    setAboutMe({ ...aboutMe, quote: event.target.value });
  };

  const handleMoreChange = (event, index) => {
    const updatedMore = [...aboutMe.more];
    updatedMore[index] = event.target.value;
    setAboutMe({ ...aboutMe, more: updatedMore });
  };

  // resume
  const handleFieldUpdate = (fieldName, fieldValue) => {
    setResume((prevResume) => ({
      ...prevResume,
      [fieldName]: fieldValue,
    }));
  };

  // section 2
  const handleUpdateField = (field, value) => {
    const updatedResume = { ...resume };
    updatedResume[field] = value;
    setResume(updatedResume);
  };

  const handleAddToSkillList = (list, item) => {
    const updatedResume = { ...resume };
    updatedResume["section2"][list].push(item);
    setResume(updatedResume);
  };

  const handleDeleteFromSkillList = (list, index) => {
    const updatedResume = { ...resume };
    updatedResume["section2"][list].splice(index, 1);
    setResume(updatedResume);
  };

  const handleUpdateListItem = (list, index, value) => {
    const updatedResume = { ...resume };
    updatedResume["section2"][list][index] = value;
    setResume(updatedResume);
  };

  // section 3
  // handle updating section3 title
  const handleSection3TitleChange = (event) => {
    setResume({
      ...resume,
      section3: {
        ...resume.section3,
        title: event.target.value,
      },
    });
  };

  const handleSection3HeadingChange = (event, index) => {
    const newTitle = event.target.value;
    setResume({
      ...resume,
      section3: {
        ...resume.section3,
        content: resume.section3.content.map((item, i) =>
          i === index ? { ...item, title: newTitle } : item
        ),
      },
    });
  };

  // handle updating list item
  const handleListItemChange = (event, sectionIndex, listItemIndex) => {
    const updatedList = resume.section3.content[sectionIndex].list.map(
      (listItem, index) => {
        if (index === listItemIndex) {
          return event.target.value;
        } else {
          return listItem;
        }
      }
    );

    setResume({
      ...resume,
      section3: {
        ...resume.section3,
        content: [
          ...resume.section3.content.slice(0, sectionIndex),
          {
            ...resume.section3.content[sectionIndex],
            list: updatedList,
          },
          ...resume.section3.content.slice(sectionIndex + 1),
        ],
      },
    });
  };

  // handle adding new list item
  const handleAddListItem = (sectionIndex) => {
    setResume({
      ...resume,
      section3: {
        ...resume.section3,
        content: [
          ...resume.section3.content.slice(0, sectionIndex),
          {
            ...resume.section3.content[sectionIndex],
            list: [...resume.section3.content[sectionIndex].list, ""],
          },
          ...resume.section3.content.slice(sectionIndex + 1),
        ],
      },
    });
  };

  // handle deleting list item
  const handleDeleteListItem = (sectionIndex, listItemIndex) => {
    const updatedList = resume.section3.content[sectionIndex].list.filter(
      (listItem, index) => index !== listItemIndex
    );

    setResume({
      ...resume,
      section3: {
        ...resume.section3,
        content: [
          ...resume.section3.content.slice(0, sectionIndex),
          {
            ...resume.section3.content[sectionIndex],
            list: updatedList,
          },
          ...resume.section3.content.slice(sectionIndex + 1),
        ],
      },
    });
  };

  // section 4
  const handleSection4TitleChange = (event) => {
    const newResume = {
      ...resume,
      section4: {
        ...resume.section4,
        title: event.target.value,
      },
    };
    setResume(newResume);
  };

  const handleSection4ContentChange = (index, event) => {
    const newResume = {
      ...resume,
      section4: {
        ...resume.section4,
        content: [
          ...resume.section4.content.slice(0, index),
          {
            ...resume.section4.content[index],
            title: event.target.value,
          },
          ...resume.section4.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleSection4LinkChange = (index, event) => {
    const newResume = {
      ...resume,
      section4: {
        ...resume.section4,
        content: [
          ...resume.section4.content.slice(0, index),
          {
            ...resume.section4.content[index],
            link: event.target.value,
          },
          ...resume.section4.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleSection4VerificationChange = (index, event) => {
    const newResume = {
      ...resume,
      section4: {
        ...resume.section4,
        content: [
          ...resume.section4.content.slice(0, index),
          {
            ...resume.section4.content[index],
            verification: event.target.value,
          },
          ...resume.section4.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleAddSection4Item = () => {
    const newResume = {
      ...resume,
      section4: {
        ...resume.section4,
        content: [
          ...resume.section4.content,
          {
            title: "",
            link: "",
            verification: "",
          },
        ],
      },
    };
    setResume(newResume);
  };

  const handleDeleteSection4Item = (index) => {
    const newResume = {
      ...resume,
      section4: {
        ...resume.section4,
        content: [
          ...resume.section4.content.slice(0, index),
          ...resume.section4.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  // section 5
  const handleSection5TitleChange = (event) => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        title: event.target.value,
      },
    };
    setResume(newResume);
  };

  const handleSection5ContentNameChange = (index, event) => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        content: [
          ...resume.section5.content.slice(0, index),
          {
            ...resume.section5.content[index],
            name: event.target.value,
          },
          ...resume.section5.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleSection5ContentMonthYearChange = (index, event) => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        content: [
          ...resume.section5.content.slice(0, index),
          {
            ...resume.section5.content[index],
            monthYear: event.target.value,
          },
          ...resume.section5.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleSection5ContentUniversityChange = (index, event) => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        content: [
          ...resume.section5.content.slice(0, index),
          {
            ...resume.section5.content[index],
            university: event.target.value,
          },
          ...resume.section5.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleSection5ContentMajorsChange = (listIndex, itemIndex, event) => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        content: [
          ...resume.section5.content.slice(0, itemIndex),
          {
            ...resume.section5.content[itemIndex],
            majors: [
              ...resume.section5.content[itemIndex].majors.slice(0, listIndex),
              event.target.value,
              ...resume.section5.content[itemIndex].majors.slice(listIndex + 1),
            ],
          },
          ...resume.section5.content.slice(itemIndex + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleAddSection5Item = () => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        content: [
          ...resume.section5.content,
          {
            name: "",
            monthYear: "",
            university: "",
            majors: [],
          },
        ],
      },
    };
    setResume(newResume);
  };

  const handleDeleteSection5Item = (index) => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        content: [
          ...resume.section5.content.slice(0, index),
          ...resume.section5.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleAddSection5MajorsItem = (index) => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        content: [
          ...resume.section5.content.slice(0, index),
          {
            ...resume.section5.content[index],
            majors: [...resume.section5.content[index].majors, ""],
          },
          ...resume.section5.content.slice(index + 1),
        ],
      },
    };
    setResume(newResume);
  };

  const handleDeleteSection5MajorsItem = (indexToDelete, parentIndex) => {
    const newResume = {
      ...resume,
      section5: {
        ...resume.section5,
        content: [
          ...resume.section5.content.slice(0, parentIndex),
          {
            ...resume.section5.content[parentIndex],
            majors: [
              ...resume.section5.content[parentIndex].majors.slice(
                0,
                indexToDelete
              ),
              ...resume.section5.content[parentIndex].majors.slice(
                indexToDelete + 1
              ),
            ],
          },
          ...resume.section5.content.slice(parentIndex + 1),
        ],
      },
    };
    setResume(newResume);
  };

  // section 6
  // update a single item in the content array
  const updateContentItem = (index, value) => {
    const updatedContent = [...resume.section6.content];
    updatedContent[index] = value;
    setResume({
      ...resume,
      section6: {
        ...resume.section6,
        content: updatedContent,
      },
    });
  };

  // add a new item to the content array
  const addContentItem = (value) => {
    const updatedContent = [...resume.section6.content, value];
    setResume({
      ...resume,
      section6: {
        ...resume.section6,
        content: updatedContent,
      },
    });
  };

  // delete an item from the content array
  const deleteContentItem = (index) => {
    const updatedContent = resume.section6.content.filter(
      (item, i) => i !== index
    );
    setResume({
      ...resume,
      section6: {
        ...resume.section6,
        content: updatedContent,
      },
    });
  };

  // update the entire section6 object
  const updateSection6 = (updatedSection6) => {
    setResume({
      ...resume,
      section6: updatedSection6,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (saveBtnClicked) {
      const updatedData = {
        name,
        profilePic,
        email,
        introText,
        phone,
        qualifications,
        skills,
        projects,
        moreProjects,
        aboutMe,
        resume,
      };

      fetch("http://localhost:5000/api/updateData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((response) => {
          if (response.ok) {
            alert("Data saved successfully.");
          } else {
            alert("Error saving data.");
          }
          return response;
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
          alert("Error saving data.");
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="admin-page text-white py-20 justify-items-start items-start"
    >
      <h1 className="text-white w-fit mb-3">Personal Information</h1>
      <div className={labelTextInputWrapper}>
        <label className={labelStyle}>Name </label>
        <input
          className={textInputStyle}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className={labelTextInputWrapper}>
        <label className={labelStyle}>Profile Picture</label>
        <input
          className={textInputStyle}
          type="text"
          value={profilePic}
          onChange={handleProfilePicChange}
          disabled
        />
      </div>
      <div className={labelTextInputWrapper}>
        <label className={labelStyle}>Email</label>
        <input
          className={textInputStyle}
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={labelTextInputWrapper}>
        <label className={labelStyle}>Intro Text</label>
        <textarea
          className={textInputStyle}
          value={introText}
          onChange={handleIntroTextChange}
        />
      </div>
      <div className={labelTextInputWrapper}>
        <label className={labelStyle}>Phone</label>
        <input
          className={textInputStyle}
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div>
        <h1 className="text-white w-fit mt-10 mb-3">Qualifications</h1>
        {qualifications.map((qualification, index) => (
          <div key={index}>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Title</label>
              <input
                className={textInputStyle}
                type="text"
                value={qualification.name}
                onChange={(e) => handleQualificationNameChange(e, index)}
              />
              <label
                className={
                  "w-20 ml-3 text-left mr-2 mb-0 text-lg font-medium text-gray-900 dark:text-white"
                }
              >
                Url
              </label>
              <input
                className={textInputStyle}
                type="url"
                value={qualification.link}
                onChange={(e) => handleQualificationLinkChange(e, index)}
              />
              <button
                className="delete-btn ml-2"
                onClick={() => handleDeleteQualification(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <br />
        <button onClick={handleAddQualification}>Add Qualification</button>
      </div>
      <div>
        <h1 className="text-white w-fit mt-10 mb-3">Skills</h1>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mb-20 p-2 dark:bg-slate-700 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
          >
            <div className={labelTextInputWrapper}>
              <button type="button" onClick={() => handleAddSkillItem(index)}>
                Add Skill
              </button>
              <button
                className="delete-btn ml-2"
                type="button"
                onClick={() => handleDeleteSkill(index)}
              >
                Delete Category
              </button>
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Category</label>
              <input
                className={textInputStyle}
                type="text"
                value={skill.category}
                onChange={(event) =>
                  handleSkillChange(index, "category", event)
                }
              />
            </div>
            <p className="text-left mr-2 mb-0 text-lg text-gray-900 dark:text-white">
              Skills
            </p>
            {skill.items.map((item, itemIndex) => (
              <div key={itemIndex} className={labelTextInputWrapper}>
                <label className={labelStyle}></label>
                <input
                  className={textInputStyle}
                  type="text"
                  value={item}
                  onChange={(event) =>
                    handleSkillItemChange(index, itemIndex, "items", event)
                  }
                />
                <button
                  className="delete-btn ml-2"
                  type="button"
                  onClick={() => handleDeleteSkillItem(index, itemIndex)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ))}
        <button className="-mt-20" type="button" onClick={handleAddSkill}>
          Add New Skill
        </button>
      </div>
      <div>
        <h1 className="text-white w-fit mt-10 mb-3">Projects:</h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-20 p-3 dark:bg-slate-700 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
          >
            <div className={labelTextInputWrapper}>
              <button
                className="delete-btn"
                type="button"
                onClick={() => handleProjectDelete(setProjects, index)}
              >
                Delete project
              </button>
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`title-${index}`}>
                Title:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`title-${index}`}
                value={project.title}
                onChange={(event) =>
                  handleProjectChange(setProjects, event, index, "title")
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`description-${index}`}>
                Description:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`description-${index}`}
                value={project.description}
                onChange={(event) =>
                  handleProjectChange(setProjects, event, index, "description")
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`image-${index}`}>
                Image:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`image-${index}`}
                value={project.image}
                onChange={(event) =>
                  handleProjectChange(setProjects, event, index, "image")
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Features</label>
            </div>
            {project.features.map((feature, featureIndex) => (
              <div key={featureIndex} className={labelTextInputWrapper}>
                <label
                  className={labelStyle}
                  htmlFor={`feature-${index}-${featureIndex}`}
                >
                  Feature {featureIndex + 1}:
                </label>
                <input
                  type="text"
                  className={textInputStyle}
                  id={`feature-${index}-${featureIndex}`}
                  value={feature}
                  onChange={(event) =>
                    handleFeatureUpdate(
                      setProjects,
                      index,
                      featureIndex,
                      event.target.value
                    )
                  }
                />
                <button
                  className="delete-btn ml-2"
                  onClick={() =>
                    handleFeatureDelete(setProjects, index, featureIndex)
                  }
                >
                  Delete
                </button>
              </div>
            ))}
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}></label>
              <div
                className={textInputStyle.replace(
                  " border border-gray-300",
                  ""
                )}
              ></div>
              <button onClick={() => handleFeatureAdd(setProjects, index, "")}>
                {" "}
                Add Feature
              </button>
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Stack:</label>
              {project.stack.map((stackItem, stackIndex) => (
                <div key={stackIndex}>
                  <input
                    type="checkbox"
                    id={`stack-${index}-${stackIndex}`}
                    checked={project.stack.includes(stackItem)}
                    onChange={(event) =>
                      handleProjectStackChange(setProjects, event, index)
                    }
                    disabled
                  />
                  <label
                    className={labelStyle}
                    htmlFor={`stack-${index}-${stackIndex}`}
                  >
                    {stackItem}
                  </label>
                </div>
              ))}
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`live-link-${index}`}>
                Live link:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`live-link-${index}`}
                value={project.liveLink}
                onChange={(event) =>
                  handleProjectChange(setProjects, event, index, "liveLink")
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`code-link-${index}`}>
                Code link:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`code-link-${index}`}
                value={project.codeLink}
                onChange={(event) =>
                  handleProjectChange(setProjects, event, index, "codeLink")
                }
              />
            </div>
          </div>
        ))}

        <button type="button" onClick={() => handleAddProject(setProjects)}>
          Add New Project
        </button>
      </div>
      <div>
        <h1 className="text-white w-fit mt-10 mb-3">More Projects:</h1>
        {moreProjects.map((project, index) => (
          <div
            key={index}
            className="mb-20 p-3 dark:bg-slate-700 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
          >
            <div className={labelTextInputWrapper}>
              <button
                className="delete-btn"
                type="button"
                onClick={() => handleProjectDelete(setMoreProjects, index)}
              >
                Delete project
              </button>
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`title-${index}`}>
                Title:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`title-${index}`}
                value={project.title}
                onChange={(event) =>
                  handleProjectChange(setMoreProjects, event, index, "title")
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`description-${index}`}>
                Description:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`description-${index}`}
                value={project.description}
                onChange={(event) =>
                  handleProjectChange(
                    setMoreProjects,
                    event,
                    index,
                    "description"
                  )
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`image-${index}`}>
                Image:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`image-${index}`}
                value={project.image}
                onChange={(event) =>
                  handleProjectChange(setMoreProjects, event, index, "image")
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Features:</label>
            </div>
            {project.features.map((feature, featureIndex) => (
              <div key={featureIndex} className={labelTextInputWrapper}>
                <label
                  className={labelStyle}
                  htmlFor={`feature-${index}-${featureIndex}`}
                >
                  Feature {featureIndex + 1}:
                </label>
                <input
                  type="text"
                  className={textInputStyle}
                  id={`feature-${index}-${featureIndex}`}
                  value={feature}
                  onChange={(event) =>
                    handleFeatureUpdate(
                      setMoreProjects,
                      index,
                      featureIndex,
                      event.target.value
                    )
                  }
                />
                <button
                  className="delete-btn ml-2"
                  onClick={() =>
                    handleFeatureDelete(setMoreProjects, index, featureIndex)
                  }
                >
                  Delete
                </button>
              </div>
            ))}
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}></label>
              <div
                className={textInputStyle.replace(
                  " border border-gray-300",
                  ""
                )}
              ></div>
              <button
                onClick={() => handleFeatureAdd(setMoreProjects, index, "")}
              >
                Add Feature
              </button>
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Stack:</label>
              {project.stack.map((stackItem, stackIndex) => (
                <div key={stackIndex}>
                  <input
                    type="checkbox"
                    id={`stack-${index}-${stackIndex}`}
                    checked={project.stack.includes(stackItem)}
                    onChange={(event) =>
                      handleProjectStackChange(setMoreProjects, event, index)
                    }
                    disabled
                  />
                  <label htmlFor={`stack-${index}-${stackIndex}`}>
                    {stackItem}
                  </label>
                </div>
              ))}
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`live-link-${index}`}>
                Live link:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`live-link-${index}`}
                value={project.liveLink}
                onChange={(event) =>
                  handleProjectChange(setMoreProjects, event, index, "liveLink")
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle} htmlFor={`code-link-${index}`}>
                Code link:
              </label>
              <input
                type="text"
                className={textInputStyle}
                id={`code-link-${index}`}
                value={project.codeLink}
                onChange={(event) =>
                  handleProjectChange(setMoreProjects, event, index, "codeLink")
                }
              />
            </div>
          </div>
        ))}

        <button type="button" onClick={() => handleAddProject(setMoreProjects)}>
          Add More projects
        </button>
      </div>
      <div className="mb-5">
        <h1 className="text-white w-fit mt-10 mb-3">About Yourself</h1>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Title:</label>
          <input
            className={textInputStyle}
            type="text"
            value={aboutMe.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Quote:</label>
          <textarea
            className={textInputStyle}
            value={aboutMe.quote}
            onChange={handleQuoteChange}
          />
        </div>
        {aboutMe.more.map((moreText, index) => (
          <div key={index} className={labelTextInputWrapper}>
            <label className={labelStyle}>Paragraph {index + 1}:</label>
            <textarea
              className={textInputStyle}
              value={moreText}
              onChange={(event) => handleMoreChange(event, index)}
            />
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-white w-fit mb-3">Resume</h1>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle} htmlFor="summary">
            Section 1
          </label>
          <input
            type="text"
            className={textInputStyle}
            value={resume.section1.title}
            onChange={(event) =>
              handleUpdateField("section1", {
                ...resume.section1,
                title: event.target.value,
              })
            }
            disabled
          />
        </div>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}></label>

          <textarea
            id="summary"
            className={textInputStyle}
            value={resume.section1.text}
            onChange={(event) =>
              handleFieldUpdate("section1", {
                title: "Summary",
                text: event.target.value,
              })
            }
          />
        </div>

        <br />

        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Section 2</label>
          <input
            type="text"
            className={textInputStyle}
            value={resume.section2.title}
            onChange={(event) =>
              handleUpdateField("section2", {
                ...resume.section2,
                title: event.target.value,
              })
            }
            disabled
          />
        </div>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>List 1</label>
          <div className="w-10/12">
            {resume.section2.list1.map((item, index) => (
              <div key={index} className={labelTextInputWrapper}>
                <input
                  type="text"
                  className={textInputStyle}
                  value={item}
                  onChange={(event) =>
                    handleUpdateListItem("list1", index, event.target.value)
                  }
                />
                <button
                  className="delete-btn ml-2"
                  onClick={() => handleDeleteFromSkillList("list1", index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={labelTextInputWrapper}>
          <div className="w-[70%]"></div>
          <button onClick={() => handleAddToSkillList("list1", "")}>
            Add To List 1
          </button>
        </div>

        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>List 2</label>
          <div className="w-10/12">
            {resume.section2.list2.map((item, index) => (
              <div key={index} className={labelTextInputWrapper}>
                <input
                  type="text"
                  className={textInputStyle}
                  value={item}
                  onChange={(event) =>
                    handleUpdateListItem("list2", index, event.target.value)
                  }
                />
                <button
                  className="delete-btn ml-2"
                  onClick={() => handleDeleteFromSkillList("list2", index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={labelTextInputWrapper}>
          <div className="w-[70%]"></div>
          <button onClick={() => handleAddToSkillList("list2", "")}>
            Add To List 2
          </button>
        </div>

        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Section 3</label>
          <input
            type="text"
            className={textInputStyle}
            value={resume.section3.title}
            onChange={handleSection3TitleChange}
            disabled
          />
        </div>

        {resume.section3.content.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Heading</label>
              <input
                type="text"
                className={textInputStyle}
                value={section.title}
                onChange={(event) =>
                  handleSection3HeadingChange(event, sectionIndex)
                }
              />
            </div>
            <div>
              {section.list.map((listItem, listItemIndex) => (
                <div key={listItemIndex} className={labelTextInputWrapper}>
                  <label className={labelStyle}></label>
                  <input
                    type="text"
                    className={textInputStyle}
                    value={listItem}
                    onChange={(event) =>
                      handleListItemChange(event, sectionIndex, listItemIndex)
                    }
                  />
                  <button
                    className="delete-btn ml-2"
                    onClick={() =>
                      handleDeleteListItem(sectionIndex, listItemIndex)
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}></label>
              <div
                className={textInputStyle.replace(
                  "bg-gray-50 border border-gray-300",
                  "bg-transparent"
                )}
              ></div>
              <button onClick={() => handleAddListItem(sectionIndex)}>
                Add a Point
              </button>
            </div>
          </div>
        ))}

        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Section 4 Title:</label>
          <input
            type="text"
            className={textInputStyle}
            value={resume.section4.title}
            onChange={handleSection4TitleChange}
            disabled
          />
        </div>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}></label>
          <div className="w-8/12">
            {resume.section4.content.map((item, index) => (
              <div
                key={index}
                className="mb-3 p-2 dark:bg-slate-700 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
              >
                <div className={labelTextInputWrapper}>
                  <label className={labelStyle}>Title</label>
                  <input
                    type="text"
                    className={textInputStyle}
                    value={item.title}
                    onChange={(event) =>
                      handleSection4ContentChange(index, event)
                    }
                  />
                </div>
                <div className={labelTextInputWrapper}>
                  <label className={labelStyle}>Link</label>
                  <input
                    type="text"
                    className={textInputStyle}
                    value={item.link}
                    onChange={(event) => handleSection4LinkChange(index, event)}
                  />
                </div>
                <div className={labelTextInputWrapper}>
                  <label className={labelStyle}>Verification</label>
                  <input
                    type="text"
                    className={textInputStyle}
                    value={item.verification}
                    onChange={(event) =>
                      handleSection4VerificationChange(index, event)
                    }
                  />
                </div>
                <div className={labelTextInputWrapper}>
                  <label className={labelStyle}></label>
                  <div
                    className={textInputStyle.replace(
                      "bg-gray-50 border border-gray-300",
                      "bg-transparent w-1/2"
                    )}
                  ></div>
                  <button
                    className="delete-btn w-fit"
                    onClick={() => handleDeleteSection4Item(index)}
                  >
                    Delete Certification
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddSection4Item}>Add Certification</button>
        <div className={labelTextInputWrapper + " mb-3"}>
          <label className={labelStyle}>Section 5 Title</label>
          <input
            className={textInputStyle}
            value={resume.section5.title}
            onChange={handleSection5TitleChange}
            disabled
          />
        </div>
        {resume.section5.content.map((item, index) => (
          <div
            key={index}
            className="mb-10 p-2 dark:bg-slate-700 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
          >
            <div className={labelTextInputWrapper}>
              <button
                className="delete-btn"
                onClick={() => handleDeleteSection5Item(index)}
              >
                Delete Education
              </button>
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Name</label>
              <input
                type="text"
                className={textInputStyle}
                value={item.name}
                onChange={(event) =>
                  handleSection5ContentNameChange(index, event)
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>Month/Year</label>
              <input
                type="text"
                className={textInputStyle}
                value={item.monthYear}
                onChange={(event) =>
                  handleSection5ContentMonthYearChange(index, event)
                }
              />
            </div>
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}>University</label>
              <input
                type="text"
                className={textInputStyle}
                value={item.university}
                onChange={(event) =>
                  handleSection5ContentUniversityChange(index, event)
                }
              />
            </div>
            {item.majors.map((major, listIndex) => (
              <div key={listIndex}>
                <div className={labelTextInputWrapper}>
                  <label className={labelStyle}></label>
                  <input
                    type="text"
                    className={textInputStyle}
                    value={major}
                    onChange={(event) =>
                      handleSection5ContentMajorsChange(listIndex, index, event)
                    }
                  />
                  <button
                    className="delete-btn ml-2"
                    onClick={() =>
                      handleDeleteSection5MajorsItem(listIndex, index)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className={labelTextInputWrapper}>
              <label className={labelStyle}></label>
              <div
                className={textInputStyle.replace(
                  "bg-gray-50 border border-gray-300",
                  "bg-transparent"
                )}
              ></div>
              <button onClick={() => handleAddSection5MajorsItem(index)}>
                Add Input
              </button>
            </div>
          </div>
        ))}
        <button className="mb-3" onClick={handleAddSection5Item}>
          Add Education
        </button>

        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Section 6 Title</label>
          <input
            type="text"
            className={textInputStyle}
            value={resume.section6.title}
            onChange={(e) =>
              updateSection6({
                ...resume.section6,
                title: e.target.value,
              })
            }
            disabled
          />
        </div>
      </div>
      {resume.section6.content.map((item, index) => (
        <div key={index}>
          <div className={labelTextInputWrapper}>
            <label className={labelStyle}></label>
            <input
              type="text"
              className={textInputStyle}
              value={item}
              onChange={(e) => updateContentItem(index, e.target.value)}
            />
            <button onClick={() => deleteContentItem(index)}>Delete</button>
          </div>
        </div>
      ))}
      <div className={labelTextInputWrapper}>
        <label className={labelStyle}></label>
        <div
          className={textInputStyle.replace(
            "bg-gray-50 border border-gray-300",
            "bg-transparent"
          )}
        ></div>
        <button onClick={() => addContentItem("")}>Add Input</button>
      </div>

      <button
        type="submit"
        className="save-btn"
        onClick={() => setSaveBtnClicked(true)}
      >
        Save
      </button>
    </form>
  );
}

export default AdminPage;
