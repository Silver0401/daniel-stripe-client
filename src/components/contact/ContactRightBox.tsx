import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

const ContactRightBox: React.FC = () => {
  const [buttonIsLoading, setButtonIsLoading] = useState(false);

  const TestLoading = () => {
    setButtonIsLoading(true);

    setTimeout(() => {
      setButtonIsLoading(false);
    }, 2000);
  };

  return (
    <div className="ContactRightBox">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          TestLoading();
        }}
      >
        <span>
          <input type="text" required />
          <label>Nombre</label>
        </span>
        <span>
          <input type="text" required />
          <label>Correo</label>
        </span>
        <span>
          <input type="text" required />
          <label>Teléfono</label>
        </span>
        <span>
          <textarea required />
          <label>Motivo</label>
        </span>
        <span>
          <Button
            isLoading={buttonIsLoading}
            loadingText="Agendando"
            colorScheme="green"
            variant="outline"
            type="submit"
            className="submitButton"
          >
            Agendar 📌
          </Button>
        </span>
      </form>
      <div className="bgBall" />
    </div>
  );
};

export default ContactRightBox;
