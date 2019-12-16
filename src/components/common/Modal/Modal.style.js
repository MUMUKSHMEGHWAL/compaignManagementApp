
import styled from 'styled-components';

export default styled.div`
  padding: 24px;

  .text-key,
  .text-value,
  .modal-title,
  .close {
    display: inline-block;
  }

  .modal-title {
    font-size: 18px;
    color: #2F363F;
    letter-spacing: 0;
    margin-bottom: 48px;
    position: relative;
    left: 20px;
  }

  .text-key,
  .text-value {
    font-size: 16px;
  }

  .text-value  {
    color: #81878C;
    padding-left: 8px;
  }

  .text-item {
    margin-bottom: 24px;
  }

  .close {
    float: right;
  }

  .text-group {
    margin-top: 36px;
  }
`;
