import React from "react";

const searchStatus = ({ users }) => {
    let classesOfTitle = "badge bg-";
    classesOfTitle += users.length === 0 ? "danger" : "primary";

    const renderPhase = (number) => {
        if (number === 0) {
            return "Никто с тобой не тусанет";
        }
        if (number === 1) return `${number} человек тусанет с тобой сегодня`;
        if (
            number.toString() === "2" ||
            number.toString() === "3" ||
            number.toString() === "4"
        ) {
            return `${number} человека тусанут с тобой сегодня`;
        }
        return `${number} человек тусанут с тобой сегодня`;
    };

    return (
        <h2>
            <span className={classesOfTitle}>{renderPhase(users.length)}</span>
        </h2>
    );
};

export default searchStatus;
