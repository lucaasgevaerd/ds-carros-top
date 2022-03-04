import './styles.css';

const Button = ( props: { className: string; text: string } ) => {
  return (
    <>
          <div className="button">
            <button className={props.className}>{props.text}</button>
          </div>
    </>
  );
}

export default Button;
