from django import forms
from captcha.fields import CaptchaField


class StampForm(forms.Form):
    captcha = CaptchaField()
