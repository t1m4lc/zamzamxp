<template>
  <Card class="rounded-3xl border-2 border-slate-200 bg-white p-8 lg:p-12">
    <h2 class="mb-8 text-center text-3xl font-black text-slate-900">
      {{ $t('contact.form.title') }}
    </h2>

    <!-- Success Message -->
    <div v-if="formState.success" class="mb-6 rounded-xl border-2 border-green-200 bg-green-50 p-4 text-center">
      <CheckCircle2 class="mb-2 inline-block h-8 w-8 text-green-500" />
      <p class="font-semibold text-green-800">
        {{ $t('contact.form.successMessage') }}
      </p>
    </div>

    <!-- Error Message -->
    <div v-if="formState.error" class="mb-6 rounded-xl border-2 border-red-200 bg-red-50 p-4 text-center">
      <AlertCircle class="mb-2 inline-block h-8 w-8 text-red-500" />
      <p class="font-semibold text-red-800">
        {{ $t('contact.form.errorMessage') }}
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <label for="name" class="mb-2 block text-sm font-semibold text-slate-900">
            {{ $t('contact.form.nameLabel') }} *
          </label>
          <input v-model="formData.name" type="text" id="name" class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none" :placeholder="$t('contact.form.namePlaceholder')" required :disabled="formState.loading" />
        </div>

        <div>
          <label for="email" class="mb-2 block text-sm font-semibold text-slate-900">
            {{ $t('contact.form.emailLabel') }} *
          </label>
          <input v-model="formData.email" type="email" id="email" class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none" :placeholder="$t('contact.form.emailPlaceholder')" required :disabled="formState.loading" />
        </div>
      </div>

      <div>
        <label for="subject" class="mb-2 block text-sm font-semibold text-slate-900">
          {{ $t('contact.form.subjectLabel') }}
        </label>
        <input v-model="formData.subject" type="text" id="subject" class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none" :placeholder="$t('contact.form.subjectPlaceholder')" :disabled="formState.loading" />
      </div>

      <div>
        <label for="message" class="mb-2 block text-sm font-semibold text-slate-900">
          {{ $t('contact.form.messageLabel') }} *
        </label>
        <textarea v-model="formData.message" id="message" rows="6" class="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors focus:border-orange-500 focus:outline-none" :placeholder="$t('contact.form.messagePlaceholder')" required :disabled="formState.loading"></textarea>
      </div>

      <Button type="submit" size="lg" class="w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] font-bold" :disabled="formState.loading">
        <span v-if="formState.loading" class="flex items-center justify-center">
          <Loader2 class="mr-2 h-5 w-5 animate-spin" />
          {{ $t('contact.form.sending') }}
        </span>
        <span v-else class="flex items-center justify-center">
          {{ $t('contact.form.submit') }}
          <Send class="ml-2 h-5 w-5" />
        </span>
      </Button>
    </form>

    <p class="mt-6 text-center text-sm text-slate-500">
      {{ $t('contact.form.privacyNote') }}
    </p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-vue-next'

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Form state
const formState = ref({
  loading: false,
  success: false,
  error: false,
  successMessage: '',
  errorMessage: ''
})

// Handle form submission
const handleSubmit = async () => {
  // Reset states
  formState.value.success = false
  formState.value.error = false
  formState.value.loading = true

  try {
    const response = await $fetch<{ success: boolean; message: string }>('/api/contact', {
      method: 'POST',
      body: formData.value
    })

    // Show success message
    formState.value.success = true
    formState.value.successMessage = response.message || 'Your message has been sent successfully!'

    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    // Scroll to success message (client-only)
    if (import.meta.client) {
      setTimeout(() => {
        const successElement = document.querySelector('.border-green-200')
        successElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }

  } catch (error: any) {
    formState.value.error = true
    formState.value.errorMessage = error.data?.statusMessage || 'Something went wrong. Please try again.'

    // Scroll to error message (client-only)
    if (import.meta.client) {
      setTimeout(() => {
        const errorElement = document.querySelector('.border-red-200')
        errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  } finally {
    formState.value.loading = false
  }
}
</script>
