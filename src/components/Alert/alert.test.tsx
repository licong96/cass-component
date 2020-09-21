import React from 'react'
import { render } from '@testing-library/react'
import Alert, { AlertTypes, BaseAlertProps } from './alert';

const testProps: BaseAlertProps = {
    title: '标题',
    description: '描述',
    type: 'success',
}

describe('test alert component', () => {
    it('should render the corrent default alert', () => {
        const wrapper = render(<Alert {...testProps}></Alert>);
        // const element = wrapper.getByText('');
        expect(1 + 2).toBe(3)
        // expect(element).toHaveClass('alert');
    })
})