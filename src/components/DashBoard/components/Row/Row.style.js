import styled from 'styled-components';

export default styled.tr`
  .item-component {
    display: inline-block;
    min-width: 60px;
  }

  .name-section {
    display: flex;
    flex-wrap: wrap;
  }

  .item-name {
    padding-top: 8px;
    margin-left: 14px;

    p {
      text-align: left;
    }
  }

  .campaign-price,
  .campaign-action {
    margin-left: 8px;
    position: relative;
    bottom: 5px;
  }

  .campaign-time,
  .campaign-country {
    font-style: italic;
  }

  .campaign-time,
  .campaign-country,
  .campaign-price,
  .campaign-action {
    padding-top: 2px;
    color: #7788A3;
    text-transform: capitalize;
    font-size: 14px;
  }

  .item-action {
    display: inline-block;
    margin-right: 40px;
  }
`;
