import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import sc from 'styled-components';

const StyledButton = sc.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

const ZoomInButton = sc(StyledButton)`
  background-color: #28a745;
`;

const ZoomOutButton = sc(StyledButton)`
  background-color: #dc3545;
`;

const ResetButton = sc(StyledButton)`
  background-color: #ffc107;
`;

const ImageViewer = ({ src }: { src: string }) => {
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className="tools">
        <ZoomInButton onClick={() => zoomIn()}>+</ZoomInButton>
        <ZoomOutButton onClick={() => zoomOut()}>-</ZoomOutButton>
        <ResetButton onClick={() => resetTransform()}>x</ResetButton>
      </div>
    );
  };

  return (
    <TransformWrapper initialScale={1}>
      {() => (
        <>
          <Controls />
          <TransformComponent>
            <div style={{ width: '100%', height: '100%' }}>
              <img src={src} alt="Displayed Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default ImageViewer;
