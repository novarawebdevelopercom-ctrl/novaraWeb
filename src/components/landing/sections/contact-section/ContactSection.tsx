'use client';

import React, { useMemo, useState } from 'react';
import classes from './ContactSection.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactInput } from '@/lib/validators/contactSchema';
import { TextInput } from '@/components/ui/text-input/text-input';
import { Group} from '@/components/ui/group/group';
import { Typography } from '@/components/ui/typography/typography';
import { Select } from '@/components/ui/select/select';
import { Textarea } from '@/components/ui/textarea/textarea';
import { Button } from '@/components/ui/button/button';
import { Alert } from '@/components/ui/alert/alert';
import { FiSend } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa6';

type ProjectOption = { value: string; label: string };

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [serverOk, setServerOk] = useState<boolean | null>(null);
  const [serverMsg, setServerMsg] = useState<string | null>(null);

  const projectOptions: ProjectOption[] = useMemo(
    () => [
      { value: 'ui-ux', label: 'UI/UX Design' },
      { value: 'frontend', label: 'Front-end Development' },
      { value: 'backend', label: 'Back-end Development' },
      { value: 'fullstack', label: 'Full-stack Project' },
      { value: 'consulting', label: 'Consulting' },
    ],
    []
  );

 
  type FormValues = ContactInput & { website?: string };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      projectType: '',
      message: '',
      website: '',
    },
    mode: 'onBlur',
  });

  const projectTypeValue = watch('projectType');

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setServerMsg(null);
    setServerOk(null);

    try {
      
      if (values.website && values.website.trim().length > 0) {
        setServerOk(true);
        setServerMsg('Your request has been submitted. We will contact you soon.');
        reset();
        return;
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          projectType: values.projectType,
          message: values.message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || 'Failed to submit the request.');
      }

      
      setServerOk(true);
      setServerMsg('Your request has been submitted successfully. We will get back to you soon.');
      reset();
    } catch (e: any) {
      setServerOk(false);
      setServerMsg(e?.message || 'An error occurred while submitting the request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography  className={classes.title}>
            <span className={classes.titleAccent}>Start Your</span> Project With Us Today
          </Typography>
          <Typography className={classes.subtitle}>
            Fill out the form and let&apos;s discuss your next digital product.
          </Typography>
        </div>

        <div className={classes.content}>
          {/* LEFT: FORM */}
          <div className={classes.formCard}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              
              <input
                className={classes.honeypot}
                tabIndex={-1}
                autoComplete="off"
                {...register('website')}
                aria-hidden="true"
              />

              <TextInput
                placeholder="Full Name"
                required
                classNames={{ input: classes.input }}
                {...register('fullName')}
                error={errors.fullName?.message}
              />

              <TextInput
                mt="md"
                placeholder="Email"
                required
                classNames={{ input: classes.input }}
                {...register('email')}
                error={errors.email?.message}
              />

              <Select
                mt="md"
                placeholder="Select project type"
                data={projectOptions}
                value={projectTypeValue}
                onChange={(v) => setValue('projectType', v || '', { shouldValidate: true })}
                required
                classNames={{ input: classes.input }}
                error={errors.projectType?.message}
              />

              <Textarea
                mt="md"
                placeholder="Message"
                minRows={5}
                autosize
                classNames={{ input: classes.textarea }}
                {...register('message')}
                error={errors.message?.message}
              />

              <Group mt="lg" justify="flex-start">
                <Button
                  type="submit"
                  loading={loading}
                  className={classes.submitBtn}
                  endIcon={<FiSend size={16} />}
                >
                  Send Request
                </Button>
              </Group>

              <div className={classes.feedback}>
                {serverOk === true && serverMsg && (
                  <Alert
                    uiType="success"
                    icon={<FaCheck size={18} />}
                    title="Request Sent"
                  >
                    {serverMsg}
                  </Alert>
                )}

                {serverOk === false && serverMsg && (
                  <Alert uiType="error" title="Error">
                    {serverMsg}
                  </Alert>
                )}
              </div>
              
            </form>
          </div>

          {/* RIGHT: IMAGE PANEL */}
          <div className={classes.imagePanel} aria-hidden="true">
            <div className={classes.imageOverlay} />
          </div>
        </div>
      </div>
    </section>
  );
}