import React from 'react';
import { shallow } from  'enzyme';
import Accordion, { AccordionProps } from '../../components/Accordion/Accordion';

it('Accordion test for received props and output', ()=>{
    const mockProps: AccordionProps = {
        title : '',
        children : <div></div>
    };
    
    const wrapper = shallow(<Accordion {...mockProps}/>);
    expect(wrapper.find('.accordion').html()).toEqual(`<div class="accordion"><h1 class="accordion__heading">${mockProps.title}</h1><div></div></div>`);
})