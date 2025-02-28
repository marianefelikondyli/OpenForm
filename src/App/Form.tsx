import { TextField, Select, SubmitBtn } from '@/components/form';
import sc from 'styled-components';
import { SyntheticEvent, useState } from 'react';

interface FormProps {
  onSubmit: (_data: Record<string, string>) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    familiar_ai: '',
    familiar_xai: '',
    familiar_dt: '',
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    setErrors({
      fullname: '',
      email: '',
      familiar_ai: !formData.get('familiar_ai') ? 'Familiarity is required' : '',
      familiar_xai: !formData.get('familiar_xai') ? 'Familiarity is required' : '',
      familiar_dt: !formData.get('familiar_dt') ? 'Familiarity is required' : '',
    });

    const fullname = formData.get('fullname')?.toString() ?? '';
    const email = formData.get('email')?.toString() ?? '';
    const familiar_ai = formData.get('familiar_ai')?.toString() ?? '';
    const familiar_xai = formData.get('familiar_xai')?.toString() ?? '';
    const familiar_dt = formData.get('familiar_dt')?.toString() ?? '';

    if (familiar_ai && familiar_xai && familiar_dt) {
      onSubmit({ fullname, email, familiar_ai, familiar_xai, familiar_dt } as Record<string, string>);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField
        id={'fullname'}
        label={'Full name'}
        placeholder={'Enter fullname'}
        name={'fullname'}
        error_message={errors['fullname']}
        has_error={errors['fullname'].length > 0}
      />
      <TextField
        id={'email'}
        label={'Email'}
        name={'email'}
        error_message={errors['email']}
        has_error={errors['email'].length > 0}
      />
      <Select
        name={'familiar_ai'}
        label={'AI familiarity*'}
        options={[
          { label: '5 (i.e.Professor)', value: 'professor' },
          { label: '4 (i.e. Post Graduate in relevant degree)', value: 'post' },
          { label: '3 (i.e. Student in relevant degree and related thesis)', value: 'under' },
          { label: '2 (i.e. Student in relevant degree)', value: 'some' },
          { label: '1 (i.e. Unfamiliar)', value: 'unfamiliar' }
        ]}
        error_message={errors['familiar_ai']}
        has_error={errors['familiar_ai'].length > 0}
      />
      <Select
        name={'familiar_xai'}
        label={'Explainable AI familiarity*'}
        options={[
          { label: '5 (i.e.Professor)', value: 'professor' },
          { label: '4 (i.e. Post Graduate in relevant degree)', value: 'post' },
          { label: '3 (i.e. Student in relevant degree and related thesis)', value: 'under' },
          { label: '2 (i.e. Student in relevant degree)', value: 'some' },
          { label: '1 (i.e. Unfamiliar)', value: 'unfamiliar' }
        ]}
        error_message={errors['familiar_xai']}
        has_error={errors['familiar_xai'].length > 0}
      />
      <Select
        name={'familiar_dt'}
        label={'Decision Trees familiarity*'}
        options={[
          { label: '5 (i.e.Professor)', value: 'professor' },
          { label: '4 (i.e. Post Graduate in relevant degree)', value: 'post' },
          { label: '3 (i.e. Student in relevant degree and related thesis)', value: 'under' },
          { label: '2 (i.e. Student in relevant degree)', value: 'some' },
          { label: '1 (i.e. Unfamiliar)', value: 'unfamiliar' }
        ]}
        error_message={errors['familiar_dt']}
        has_error={errors['familiar_dt'].length > 0}
      />
      <SubmitBtn type={'submit'}>Submit</SubmitBtn>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = sc.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
