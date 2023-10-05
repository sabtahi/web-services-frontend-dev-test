import "./ErrorComponent.css";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="error-message">
      <h4>{message}</h4>
    </div>
  );
};

export default ErrorComponent;
