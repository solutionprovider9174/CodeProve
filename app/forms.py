from django import forms
from django.contrib.auth.forms import AuthenticationForm


class BootstrapAuthenticationForm(AuthenticationForm):
    """Authentication form which uses boostrap CSS."""
    username = forms.CharField(max_length=254,
                               widget=forms.TextInput({
                                   'class': 'form-control',
                                   'placeholder': 'User name'}))
    password = forms.CharField(label=("Password"),
                               widget=forms.PasswordInput({
                                   'class': 'form-control',
                                   'placeholder':'Password'}))

# from codemirror import CodeMirrorTextarea
# # codemirror_widget = CodeMirrorTextarea(
# #     mode="python",
# #     theme="cobalt",
# #     config={
# #         'fixedGutter': True
# #     },
# # )
# #
# # document = forms.Textarea(codemirror_widget)