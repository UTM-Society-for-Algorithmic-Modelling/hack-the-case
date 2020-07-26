from rest_framework import serializers
from .models import blogPost


class blogSerializer(serializers.ModelSerializer):
        title = serializers.ReadOnlyField()
        text = serializers.ReadOnlyField()
        pub_date = serializers.ReadOnlyField()
        class Meta:
            fields = ('id','title', 'text','pub_date',)
            model = blogPost
